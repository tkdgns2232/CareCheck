/**@jsxImportSource @emotion/react */
import { BiError } from 'react-icons/bi';
import * as s from './style';
import { Link } from 'react-router-dom';

function NotFoundAuthPage(props) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <BiError />
                <h1>Not Found Page</h1>
                <p>This is not the web page you are looking for.</p>
                <p>로그인 하시려면 <Link to={"/auth/signin"}>여기</Link>를 클릭하십시오.</p>
            </div>
        </div>
    );
}

export default NotFoundAuthPage;