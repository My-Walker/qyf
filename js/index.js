window.onload = function () {
  
  // 登录/照片
  const maskEle = document.getElementsByClassName('mask')[0]
  const storyEle = document.getElementsByClassName('story')[0]
  // 登录状态持续化
  let isPass = localStorage.getItem('isPass')
  let number = localStorage.getItem('number')
  console.log('isPass ', isPass)
  if (number >= 20) {
    maskEle.style.display= 'block'
    isPass = 0
    localStorage.setItem('isPass', 0)
  }
  if (isPass == 1) {
    storyEle.style.display = 'block'
    number++
    localStorage.setItem('number', number)
    return
  }
  if (isPass == null || number == null) {
    localStorage.setItem('number', 0)
    localStorage.setItem('isPass', 0)
    maskEle.style.display= 'block'
    isPass = 0
    number = 0
  }
  // form
  const nameEle = document.getElementsByClassName('name-input')[0]
  const phoneEle = document.getElementsByClassName('phone-input')[0]
  const dateEle = document.getElementsByClassName('date-input')[0]
  const submitBtn = document.getElementsByClassName('submit-btn')[0]
  nameEle.addEventListener('input', function () {
    nameEle.style.border = 'none'
  })
  phoneEle.addEventListener('input', function () {
    phoneEle.style.border = 'none'
  })
  dateEle.addEventListener('input', function () {
    dateEle.style.border = 'none'
  })
  submitBtn.addEventListener('click', function (e) {
    // form content
    let nameVal = nameEle.value
    let phoneVal = phoneEle.value
    let dateVal = dateEle.value
    console.log('nameVal ', nameVal)
    console.log('phoneVal ', phoneVal)
    console.log('dateVal ', dateVal)
    let checkPass = true
    if (nameVal == '老公' || nameVal == '宝贝蛋' || nameVal == '老李头' || nameVal == '磊哥' || nameVal == '磊磊' || nameVal == '猪猪' || nameVal == '臭老公') {

    } else {
      nameEle.style.border = '2px solid #f40';
      checkPass = false
    }
    if (phoneVal == '18246098434') {

    } else {
      phoneEle.style.border = '2px solid #f40'; 
      checkPass = false
    }
    if (dateVal == '10.03') {

    } else {
      dateEle.style.border = '2px solid #f40'; 
      checkPass = false
    }
    if (checkPass) {
      localStorage.setItem('isPass', 1)
      localStorage.setItem('number', 0)
      maskEle.style.display = 'none'
      storyEle.style.display = 'block'
    }
  }, false)
}