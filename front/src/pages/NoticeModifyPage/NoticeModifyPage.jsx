/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css";
import { useModifyNoticeMutation } from '../../mutations/noticeMutation';
import Swal from 'sweetalert2';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useGetUsercodeNoticeList } from '../../queries/noticeQuery';

function NoticeModifyPage() {
  const { noticeId } = useParams();
  const navigate = useNavigate();

  const modifyNoticeMutation = useModifyNoticeMutation();
  const [ searchParams, setSearchParams ] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const searchText = searchParams.get("searchText") || "";
  const order = searchParams.get("order") || "default";

  const [title, setTitle] = useState("");
  const [quillContent, setQuillContent] = useState("");

  const containerRef = useRef();
  const quillInstanceRef = useRef(null);

  const searchNoticeList = useGetUsercodeNoticeList({
    page,
    limitCount: 15,
    order,
    searchText,
  });

  useEffect(() => {
    if (!searchNoticeList?.data?.data?.noticeList) {
      return;
    }

    const fetchNoticeData = async () => {
      try {
        const notice = searchNoticeList.data.data.noticeList.find(
          (notice) => notice.noticeId === parseInt(noticeId)
        );

        if (!notice) {
          Swal.fire({
            titleText: "게시글을 찾을 수 없습니다.",
            icon: "error",
            confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
          })
        }

        setTitle(notice.title);
        setQuillContent(notice.content);
      } catch (error) {
        Swal.fire({
          titleText: error.message || "게시글을 불러오는데 실패했습니다.",
          icon: error,
          confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
        });
      }
    };

    if (!!noticeId) {
      fetchNoticeData();
    }
  }, [noticeId, searchNoticeList?.data?.data?.noticeList]);

  useEffect(() => {
    if (quillInstanceRef.current) return;

    const toolbarOptions = [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }, 'bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }, { 'align': [] }],
      ['link', 'image', 'video', 'formula'],
    ];

    const quillInstance = new Quill(containerRef.current, {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: 'snow',
    });

    quillInstanceRef.current = quillInstance;

    quillInstance.on('text-change', () => {
      setQuillContent(quillInstance.root.innerHTML);
    });
  }, []);

  useEffect(() => {
    if (quillInstanceRef.current) {
      const quill = quillInstanceRef.current;

      const currentContent = quill.root.innerHTML;

      if (currentContent !== quillContent) {
        const cursorPosition = quill.getSelection()?.index || 0;
        quill.root.innerHTML = quillContent;
        quill.update();
        quill.setSelection(cursorPosition);
      }
    }
  }, [quillContent]);

  const removeHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const handleTitleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSaveOnClick = async () => {
    if (!title.trim()) {
      await Swal.fire({
        titleText: '제목을 입력하세요.',
        icon: 'warning',
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      });
      return;
    }

    if (!quillContent.trim() || quillContent === "<p><br></p>") {
      await Swal.fire({
        titleText: '게시글 내용을 입력하세요.',
        icon: 'warning',
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      });
      return;
    }

    const plainContent = removeHtmlTags(quillContent);

    const notice = { title, content: plainContent };
    const parsedNoticeId = parseInt(noticeId, 10);
  
    try {
      await modifyNoticeMutation.mutateAsync({ 
        noticeId: parsedNoticeId, 
        notice: notice
      });
  
      await Swal.fire({
        titleText: '게시글 수정 완료',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      });
      navigate(`/notice/mylist`);

    } catch (error) {
      console.error('에러 발생:', error);
      await Swal.fire({
        titleText: '게시글 수정에 실패했습니다.',
        icon: 'error',
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      });
    }
  };

  return (
    <div css={s.quillEditor}>
      <div css={s.quillTop}>
        <input
          type="text"
          value={title}
          onChange={handleTitleOnChange}
        />
        <button css={s.saveButton} onClick={handleSaveOnClick}>수정</button>
      </div>
      <div ref={containerRef} /> 
    </div>
  );
}

export default NoticeModifyPage;