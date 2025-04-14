/**@jsxImportSource @emotion/react */
import * as s from "./style";

function MainLayout({ children }) {
    return (
        <div css={s.container}>
            {children}
        </div>
    );
}

export default MainLayout;
