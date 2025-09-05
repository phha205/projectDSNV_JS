let layThongTinTuForm = () => { 
    let _taiKhoan = document.getElementById("tknv").value;
    let _hoTen = document.getElementById("name").value;
    let _email = document.getElementById("email").value;
    let _matKhau = document.getElementById("password").value;
    let _ngayLam = document.getElementById("datepicker").value;
    let _luongCoBan = document.getElementById("luongCB").value;
    let _chucVu = document.getElementById("chucvu").value;
    let _gioLam = document.getElementById("gioLam").value;
    
    let nv = {
        taiKhoan: _taiKhoan,
        hoten: _hoTen,
        email: _email,
        matKhau: _matKhau,
        ngayLam: _ngayLam,
        luongCoBan: _luongCoBan,
        chucVu: _chucVu,
        gioLam: _gioLam,
        tinhTongLuong: function () {
            let base = Number(this.luongCoBan) || 0;
            let cv = String(this.chucVu).trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''); 
            if (cv.includes('sep')) {
                return base * 3;
            } else if (cv.includes('truong phong')) {
                return base * 2;
            } return base;
        }
    };
        return nv;
 };
 let renderDSNV = ((nvArr) => { 
 let contentHTML = "";
    nvArr.forEach((nv) => {
        contentHTML += `
        <tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoten}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td></td>
            <td></td>
            <td>
                <button onclick="xoaNV('${nv.taiKhoan}')" class='btn btn-danger'>Xóa</button>
                <button onclick="suaNV('${nv.taiKhoan}')" class='btn btn-warning'>Sửa</button>
            </td>
        </tr>`;
     });
     document.querySelector('#tableDanhSach').innerHTML = contentHTML;

    });
    // <td>${(nv.tinhTongLuong()).toLocaleString('vi-VN')}</td>

    
    