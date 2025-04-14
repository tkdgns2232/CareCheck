/**@jsxImportSource @emotion/react */
import { BiError } from 'react-icons/bi';
import * as s from './style';
import { Link } from 'react-router-dom';

function NotFoundPage(props) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <BiError />
                <h1>Not Found Page</h1>
                <p>This is not the web page you are looking for.</p>
                <p>메인 페이지로 이동하시려면 <Link to={"/main"}>여기</Link> 또는 좌측 상단의 로고를 클릭하십시오.</p>
            </div>
        </div>
    );
}

export default NotFoundPage;