import React from "react";
import ReactDOM from "react-dom/client";
// Cấu hình router-dom
//setup router dom
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
// scss
import "./assets/scss/Style.scss";
// Cấu hình reudx
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

import DangNhap from "./pages/DangNhap/DangNhap";
import TemplateAmin from "./pages/Admin/TemplateAmin";
import ThongTinCoBan from "./pages/ThongTinCoBan/ThongTinCoBan";
import KhoBanGhi from "./pages/KhoBanGhi/KhoBanGhi";
import Playlist from "./pages/Playlist/Playlist";
import LapLichPhat from "./pages/LapLichPhat/LapLichPhat";
import CapNhatkhoBanGhi from "./pages/KhoBanGhi/CapNhatkhoBanGhi";
import SuaThongTin from "./pages/ThongTinCoBan/SuaThongTin";
import QuenMatKhau from "./pages/DangNhap/QuenMatKhau";
import TemplateUser from "./pages/DangNhap/TemplateUser";
import CapnhatMatKhau from "./pages/DangNhap/CapnhatMatKhau";
import LinkError from "./pages/DangNhap/LinkError";
import QuanLyPheDuyet from "./pages/KhoBanGhi/QuanLyPheDuyet";
import XemChiTietPlayList from "./pages/Playlist/XemChiTietPlayList";
import EditPlayList from "./pages/Playlist/EditPlayList";
import AddBanGhi from "./pages/Playlist/AddBanGhi";
import AddPlayList from "./pages/Playlist/AddPlayList";
import AddBanGhiPlaylist from "./pages/Playlist/AddBanGhiPlaylist";
import ChiTietLichPhat from "./pages/LapLichPhat/ChiTietLichPhat";
import EditLichPhat from "./pages/LapLichPhat/EditLichPhat";
import ApLichChoThietBi from "./pages/LapLichPhat/ApLichChoThietBi";
import QuanLyHopDong from "./pages/QuanLy/QuanLyHopDong/QuanLyHopDong";
import ThemHopDongUyQuyenMoi from "./pages/QuanLy/QuanLyHopDong/ThemHopDongUyQuyenMoi";
import ThemThongTinBanGhi from "./pages/QuanLy/QuanLyHopDong/ThemThongTinBanGhi";
import ChiTietHopDong from "./pages/QuanLy/QuanLyHopDong/ChiTietHopDong";
import ChinhSuaThongTin from "./pages/QuanLy/QuanLyHopDong/ChinhSuaThongTin";
import ChiTietHopDongKhaiThac from "./pages/QuanLy/QuanLyHopDong/QuanLyHopDongKhaiThac/ChiTietHopDongKhaiThac";
import ChinhSuaHopDongKhaiThac from "./pages/QuanLy/QuanLyHopDong/QuanLyHopDongKhaiThac/ChinhSuaHopDongKhaiThac";
import ThemHopDongKhaiThacMoi from "./pages/QuanLy/QuanLyHopDong/QuanLyHopDongKhaiThac/ThemHopDongKhaiThacMoi";
import QuanLyDonViSuDung from "./pages/QuanLy/DonViSuDung/QuanLyDonViSuDung";
import ChiTietDonViSuDung from "./pages/QuanLy/DonViSuDung/ChiTietDonViSuDung";
import ThemNguoiDung from "./pages/QuanLy/DonViSuDung/ThemNguoiDung";
import ThongTinNguoiDung from "./pages/QuanLy/DonViSuDung/ThongTinNguoiDung";
import ChinhSuaNguoiDung from "./pages/QuanLy/DonViSuDung/ChinhSuaNguoiDung";
export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route>
          <Route path="" element={<TemplateUser />}>
            <Route index element={<DangNhap />}></Route>
            {/* <Route path="*" element={<Navigate to={"/"} />}></Route> */}
            <Route path="/quenMatKhau" element={<QuenMatKhau />}></Route>
            <Route path="/capNhatMatKhau" element={<CapnhatMatKhau />}></Route>
            <Route path="/linkError" element={<LinkError />}></Route>
          </Route>
        </Route>

        <Route>
          <Route path="/admin" element={<TemplateAmin />}>
            <Route
              index
              path="/admin/khobanghi"
              element={<KhoBanGhi />}
            ></Route>
            <Route
              path="/admin/khobanghi/capnhat"
              element={<CapNhatkhoBanGhi />}
            ></Route>{" "}
            <Route
              path="/admin/khobanghi/quanLyPheDuyet"
              element={<QuanLyPheDuyet />}
            ></Route>
            <Route path="/admin/playlist" element={<Playlist />}></Route>
            <Route
              path="/admin/playlist/xemchitiet"
              element={<XemChiTietPlayList />}
            ></Route>
            <Route
              path="/admin/editplaylist"
              element={<EditPlayList />}
            ></Route>
            <Route path="/admin/addbanghi" element={<AddBanGhi />}></Route>
            <Route path="/admin/addplaylist" element={<AddPlayList />}></Route>
            <Route
              path="/admin/addbanghiplaylist"
              element={<AddBanGhiPlaylist />}
            ></Route>
            <Route path="/admin/laplichphat" element={<LapLichPhat />}></Route>
            <Route
              path="/admin/lapLichPhat/chiTiet"
              element={<ChiTietLichPhat />}
            ></Route>
            <Route
              path="/admin/lapLichPhat/editLichPhat"
              element={<EditLichPhat />}
            ></Route>
            <Route
              path="/admin/lapLichPhat/editLichPhat/apLichChoThietBi"
              element={<ApLichChoThietBi />}
            ></Route>
            <Route
              path="/admin/thongtincoban"
              element={<ThongTinCoBan />}
            ></Route>
            <Route path="/admin/suathongtin" element={<SuaThongTin />}></Route>
            <Route
              path="/admin/quanLyHopDong"
              element={<QuanLyHopDong />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/themHopDongUyQuyenMoi"
              element={<ThemHopDongUyQuyenMoi />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/themThongTinBanGhi"
              element={<ThemThongTinBanGhi />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/chiTiet"
              element={<ChiTietHopDong />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/chiTietHopDongKhaiThac"
              element={<ChiTietHopDongKhaiThac />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/chiTietHopDongKhaiThac/chinhSuaHopDongKhaiThac"
              element={<ChinhSuaHopDongKhaiThac />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/themHopDongKhaiThacMoi"
              element={<ThemHopDongKhaiThacMoi />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/chiTiet/chinhSuaThongTin"
              element={<ChinhSuaThongTin />}
            ></Route>
            <Route
              path="/admin/donViSuDung"
              element={<QuanLyDonViSuDung />}
            ></Route>
            <Route
              path="/admin/donViSuDung/chiTiet"
              element={<ChiTietDonViSuDung />}
            ></Route>
            <Route
              path="/admin/donViSuDung/chiTiet/themNguoiDung"
              element={<ThemNguoiDung />}
            ></Route>
            <Route
              path="/admin/donViSuDung/chiTiet/thongTinNguoiDung"
              element={<ThongTinNguoiDung />}
            ></Route>
            <Route
              path="/admin/donViSuDung/chiTiet/thongTinNguoiDung/chinhSuaThongTin"
              element={<ChinhSuaNguoiDung />}
            ></Route>
            {/* <Route path="*" element={<Navigate to={"/admin"} />}></Route> */}
          </Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
