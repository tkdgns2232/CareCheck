/**@jsxImportSource @emotion/react */
import ReactModal from 'react-modal';
import * as s from './style';
import { IoClose } from 'react-icons/io5';

const NoticeModal = ({ isOpen, setIsOpen, notice }) => {
    const handleCloseModal = () => {
        setIsOpen(false);
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
                    zIndex: 9999,
                },
                content: {
                    position: 'relative',
                    boxSizing: 'border-box',
                    borderRadius: '1.5rem',
                    width: '70rem',
                    padding: '2rem',
                    height: '75rem',
                    overflowY: 'auto',
                    fontSize: '1.5rem',
                    zIndex: 10000,
                },
            }}
        >
            <div>
                <h2 css={s.header}>
                    제목: {notice?.title}
                </h2>
                    <button css={s.style} onClick={handleCloseModal}><IoClose /></button>
            </div>
            <div>
                <p><strong>작성자:</strong> {notice?.username}</p>
                <p><strong>등록일:</strong> {notice?.createdAt}</p>
                <p><strong>내용:</strong> {notice?.content}</p>
            </div>
        </ReactModal>
    );
};
export default NoticeModal;