
const norm = s => `${s}`.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
                 .replace(/đ/g,'d').toLowerCase().trim();


function attachMethods(nv) {
  nv.luongCoBan = +nv.luongCoBan || 0;
  nv.gioLam     = +nv.gioLam || 0;

  if (typeof nv.tinhTongLuong !== 'function') {
    nv.tinhTongLuong = function () {
      const base = +this.luongCoBan || 0;
      const cv = norm(this.chucVu);
      if (cv.includes('giam doc') || cv.includes('sep')) return base * 3; 
      if (cv.includes('truong phong'))                   return base * 2; 
      return base;                                                     
    };
  }
  if (typeof nv.xepLoai !== 'function') {
    nv.xepLoai = function () {
      const h = +this.gioLam || 0;
      if (h >= 192) return 'Xuất sắc';
      if (h >= 176) return 'Giỏi';
      if (h >= 160) return 'Khá';
      return 'Trung bình';
    };
  }
  return nv;
}

let layThongTinTuForm = () => { 
  const nv = {
    taiKhoan:  document.getElementById("tknv").value,
    hoten:     document.getElementById("name").value,
    email:     document.getElementById("email").value,
    matKhau:   document.getElementById("password").value,
    ngayLam:   document.getElementById("datepicker").value,
    luongCoBan:document.getElementById("luongCB").value || 0,
    chucVu:    document.getElementById("chucvu").value,
    gioLam:    document.getElementById("gioLam").value || 0,
  };
  return attachMethods(nv);
};


let renderDSNV = (nvArr) => { 
  let contentHTML = "";
  nvArr.forEach((nv) => {
    const item = attachMethods(nv); 
    contentHTML += `
      <tr>
        <td>${item.taiKhoan}</td>
        <td>${item.hoten}</td>
        <td>${item.email}</td>
        <td>${item.ngayLam}</td>
        <td>${item.chucVu}</td>
        <td>${item.tinhTongLuong().toLocaleString('vi-VN')}</td>
        <td>${item.xepLoai()}</td>
        <td>
          <button onclick="xoaNV('${item.taiKhoan}')" class="btn btn-danger">Xóa</button>
          <button onclick="suaNV('${item.taiKhoan}')" class="btn btn-warning">Sửa</button>
        </td>
      </tr>`;
  });
  document.querySelector('#tableDanhSach').innerHTML = contentHTML;
};


   

    
    