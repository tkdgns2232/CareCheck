/**@jsxImportSource @emotion/react */
import { BsColumnsGap } from "react-icons/bs";
import * as s from "./style";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { headerMenuState } from "../../../atoms/Header/headerMenu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function MainSidebar() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const loginUser = queryClient.getQueryData(["userMeQuery"]);
  const [headerState, setHeaderState] = useRecoilState(headerMenuState)
  const location = useLocation();

  const handleAccountPage = () => {
    navigate("/account/info");
  }

  useEffect(() => {
    const savedState = sessionStorage.getItem("headerState");
    if(savedState) {
      setHeaderState(savedState);
    } else {
      setHeaderState("메인메뉴")
    }
  },[]);

  useEffect(() => { // 뒤로 가기 
    let newHeaderState = "메인메뉴";
    if (location.pathname.includes("/patient")) {
      newHeaderState = "접수메뉴변경";
    } else if (location.pathname.includes("/payment")) {
      newHeaderState="수납메뉴변경";
    } else if (location.pathname.includes("/admission")) {
      newHeaderState="처방메뉴변경";
    } else if (location.pathname.includes("/summary")) {
      newHeaderState="통계메뉴변경";
    } else if (location.pathname.includes("/admin")) {
      newHeaderState="관리자메뉴변경";
    } 
    setHeaderState(newHeaderState);
}, [location.pathname]);


  useEffect(() => {
    sessionStorage.setItem("headerState", headerState);
  },[headerState]);

  const renderSidebarMenu = () => {
    switch(headerState) {
      case "메인메뉴":
        return (
          <>
            <div>
              <BsColumnsGap/>
              <NavLink to="/account/info" className="NavLinkStyle">
              <span>내 정보</span>
              </NavLink>
            </div>
            <div>
              <BsColumnsGap/>
              <NavLink to="/notice/list" className="NavLinkStyle">
              <span>공지사항</span>
              </NavLink>
            </div>
          </>
        )

      case "접수메뉴변경":
        return (
          <>
            <div>
              <BsColumnsGap />
              <NavLink to="/patient" className="NavLinkStyle" end>
              <span>환자 등록</span>
              </NavLink>
            </div>
            <div>
              <BsColumnsGap />
              <NavLink to="/patient/medical-reception" className="NavLinkStyle">
              <span>진료 접수</span>
              </NavLink>
            </div>
            <div>
              <BsColumnsGap />
              <NavLink to="/patient/admission-list" className="NavLinkStyle">
              <span>오늘 접수 명단</span>
              </NavLink>
            </div>
            <div>
              <BsColumnsGap />
              <NavLink to="/patient/patients" className="NavLinkStyle">
              <span>환자 찾기</span>
              </NavLink>
            </div>
          </>
        );
      case "수납메뉴변경":
      return (
        <>
          <div>
            <BsColumnsGap />
            <NavLink to="/payment/list" className="NavLinkStyle">
            <span>수납 관리</span>
            </NavLink>
          </div>

        </>
      );
      case "처방메뉴변경":
      return (
        <>
          <div>
            <BsColumnsGap />
            <NavLink to={`/admission`} className="NavLinkStyle">
            <span>처방 관리</span>
            </NavLink>
          </div>
        </>
      );
      case "통계메뉴변경":
      return (
        <>
          <div>
            <BsColumnsGap />
            <NavLink to="/summary" className="NavLinkStyle">
            <span>병원 수익</span>
            </NavLink>
          </div>
          <div>
            <BsColumnsGap />
            <NavLink to="/summary/usercode" className="NavLinkStyle">
            <span>의사별 수익</span>
            </NavLink>
          </div>
        </>
      );
      case "관리자메뉴변경":
      return (
        <>
          <div>
            <BsColumnsGap />
            <NavLink to="/admin/users" className="NavLinkStyle">
            <span>직원 관리</span>
            </NavLink>
          </div>
          <div>
            <BsColumnsGap />
            <NavLink to="/admin/users/signup" className="NavLinkStyle">
            <span>사원 등록</span></NavLink>
          </div>
          <div>
            <BsColumnsGap />
            <NavLink to="/admin/users/order" className="NavLinkStyle">
            <span>오더 등록</span></NavLink>
          </div>
          <div>
            <BsColumnsGap />
            <NavLink to="/admin/users/scorepay" className="NavLinkStyle">
            <span>수가 등록</span></NavLink>
          </div>
        </>
      );
    }
  }
  return (
    <div css={s.sidebar}>
      <header css={s.header} >
        <NavLink to="/main" 
        onClick={()=>setHeaderState("메인메뉴")}>
        <h2>CareCheck</h2>
        </NavLink>
      </header>
      <section css={s.section}>
          {renderSidebarMenu()}
      </section>
      <footer css={s.footer}>
        <div onClick={handleAccountPage}>{loginUser?.data?.username}님</div>
      </footer>
    </div>
  );
}

export default MainSidebar;
