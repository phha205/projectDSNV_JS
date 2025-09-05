
let nvArr = [];
let dataJson = localStorage.getItem("DSNV");
nvArr = JSON.parse(dataJson) || [];
renderDSNV(nvArr);

let themNV = () => {
    let nv = layThongTinTuForm();
    nvArr.push(nv);

    let dataJson = JSON.stringify(nvArr);
    localStorage.setItem("DSNV", dataJson);



    renderDSNV(nvArr);
    
};

let xoaNV = (id) => { 
    console.log("🚀 ~ xoaNV ~ id:", id)
    let  index = nvArr.findIndex((nv) => { 
        return nv.taiKhoan == id;
    });
    console.log("🚀 ~ xoaNV ~ index:", index)
    if (index !== -1) {
        nvArr.splice(index, 1);
        console.log("Đã xóa");
        renderDSNV(nvArr);
    } else {
        console.log("không tìm thấy")
    }
};

let suaNV = (id) => {
        let index = nvArr.findIndex((nv) => nv.taiKhoan == id);
        if (index === -1) {
            return;
        }
        
    let nv = nvArr[index];
    document.getElementById("tknv").value = nv.taiKhoan;
    document.getElementById("name").value = nv.hoTen;
    document.getElementById("email").value = nv.email;
    document.getElementById("password").value = nv.matKhau;
    document.getElementById("luongCB").value = nv.luongCoBan;
    document.getElementById("chucvu").value = nv.chucVu;
    document.getElementById("gioLam").value = nv.gioLam;
    document.getElementById('btnCapNhat').addEventListener('click', capNhatNV);
 };
  let capNhatNV = () => { 
    let nv = layThongTinTuForm();
    let index = nvArr.findIndex ((item) => item.taiKhoan == nv.taiKhoan);
        if (index !== -1) {
            nvArr[index] = nv;
            renderDSNV(nvArr);
            resetForm();
        }
     
  }