var sqlMap = {
  user: {
    add: 'insert into user (username, account, password, repeatPass, email, phone, card, birth, sex) values (?,?,?,?,?,?,?,?,?)',
    select_name: 'select * from user',
    update_user: 'update user set'
  },
  camera: {
    add: 'insert into camera (Camera_ID, Camera_Label, Camera_Province, Camera_City, Camera_Country, Camera_Position_E, Camera_Position_N, User) values (?,?,?,?,?,?,?,?)',
    select_cam: 'select * from camera',
    update_cam: 'update camera set'
  }
}

module.exports = sqlMap
