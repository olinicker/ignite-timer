import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles.ts";
import { Header } from "../../components/Header/index.tsx";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
