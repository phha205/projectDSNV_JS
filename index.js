
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


let editingIndex = null;

function suaNV(id) {
  const index = nvArr.findIndex(nv => String(nv.taiKhoan) === String(id));
  if (index === -1) return;

  editingIndex = index;
  const nv = nvArr[index];

  document.getElementById("tknv").value = nv.taiKhoan;
  document.getElementById("name").value = nv.hoten;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value =nv.matKhau;
  document.getElementById("datepicker").value = nv.ngayLam;
  document.getElementById("luongCB").value = nv.luongCoBan;
  document.getElementById("chucvu").value  = nv.chucVu;
  document.getElementById("gioLam").value  = nv.gioLam;

  if (window.$) $('#myModal').modal('show');
}

function capNhatNV() {
  if (editingIndex == null) return;         

  const nvNew = layThongTinTuForm();         
  nvNew.taiKhoan = nvArr[editingIndex].taiKhoan; 

  nvArr[editingIndex] = nvNew;              
  localStorage.setItem("DSNV", JSON.stringify(nvArr));  
  renderDSNV(nvArr);                         
  editingIndex = null;                        
  if (window.$) $('#myModal').modal('hide');  
}

document.getElementById('btnCapNhat').addEventListener('click', capNhatNV);

window.suaNV = suaNV;
