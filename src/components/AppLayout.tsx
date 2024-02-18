"use client";
import { useScrollTop } from "@/Helpers/hooks";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import { Header } from "./Header";
import { useValidRoute } from "@/Helpers/hooks";
import NotFound from "../app/not-found";
import { SnackbarProvider } from "notistack";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { scrollBtn, scrollTop, pathname } = useScrollTop();

  if (useValidRoute(pathname)) {
    return (
      <>
        <SnackbarProvider
          classes={{ containerRoot: "z-alert" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          {<Header />}
          {children}
          {<Footer />}
          <div ref={scrollBtn} onClick={scrollTop} className="scrollTop">
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </SnackbarProvider>
      </>
    );
  } else {
    return <NotFound />;
  }
};

export default AppLayout;
