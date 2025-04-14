/**@jsxImportSource @emotion/react */
import ReactModal from 'react-modal';
import * as s from './style';
import { useNavigate } from 'react-router-dom';  // useNavigate 추가
import { IoClose } from "react-icons/io5";

const NoticeMyListModal = ({ isOpen, setIsOpen, notice }) => {
    const navigate = useNavigate();  // useNavigate 훅 사용

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleModifyButtonClick = () => {
        // 수정 버튼 클릭 시 NoticeModifyPage로 이동
        navigate(`/notice/modify/${notice.noticeId}`);
    };

    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            style={{
                overlay: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#00000088',
                },
                content: {
                    position: 'relative',
                    boxSizing: 'border-box',
                    borderRadius: '1.5rem',
                    width: '70rem',
                    padding: '2rem',
                    height: '75rem',
                    overflowY: 'auto',
                },
            }}
        >
            <div css={s.mainlayout}>
                <div css={s.header}>
                    <h1><strong>제목:</strong> {notice?.title}</h1>
                    <button css={s.headerCloseButton} onClick={handleCloseModal}><IoClose /></button>
                </div>
                <p><strong>작성자:</strong> {notice?.username}</p>
                <p><strong>등록일:</strong> {notice?.createdAt}</p>
                <p><strong>내용:</strong> {notice?.content}</p>
                
                <div css={s.buttonLayout}>
                    <button css={s.modifyButton} onClick={handleModifyButtonClick}>수정</button>
                    <button css={s.closeButton} onClick={handleCloseModal}>닫기</button>
                </div>
            </div>
        </ReactModal>
    );
};
export default NoticeMyListModal;
