import axios from "axios";
import { request } from "./index";

export function getOptions() {
  return request({
    url: "/getLocation/options",
    method: "GET",
  });
}

export function subOptions(data) {
  return request({
    url: "/Location/subOptions",
    method: "POST",
    data
  });
}

export function changeOptions(data) {
  return request({
    url: "/Location/changeOptions",
    method: "POST",
    data
  })
}

export function deleteOptions(data) {
  return request({
    url: "/Location/deleteOptions",
    method: "POST",
    data
  })
}

export function getMarkers() {
  return request({
    url: "/getLocation/markers",
    method: "GET",
  });
}

export function subMarkers(data) {
  return axios({
    url: "http://localhost:3000/Location/subMarkers",
    method: "POST",
    data
  })
}

export function updateMarkers(data) {
  return axios({
    url: "http://localhost:3000/Location/updateMarkers",
    method: "POST",
    data
  })
}

export function deleteMarkers(data) {
  return request({
    url: "/Location/deletemarkers",
    method: "POST",
    data
  })
}

export function Login (data) {
  return request({
    url:"/login",
    method:"POST",
    data
  })
}

export function Register (data) {
  return request({
    url:"/register",
    method:"POST",
    data
  })
}

export function getMyInfo (data) {
  return request({
    url:"/getMyInfo",
    method:"POST",
    data
  })
}

export function getUser (data) {
  return request({
    url:"/getuser",
    method:"get",
    data
  })
}

export function changeUser(data) {
  return request({
    url:"/changeuser",
    method:"POST",
    data
  })
}

export function deleteUser(data) {
  return request({
    url:"/deleteuser",
    method:"POST",
    data
  })
}

export function sendAi(data){
  return request({
    url:"/ai/goods",
    method:"POST",
    data
  })
}

export function uploadGoods (data) {
  return axios({
    url:"http://localhost:3000/goods/upload",
    method:"POST",
    data
  })
}

export function getGoods () {
  return request({
    url:"/goods",
    method:"GET"
  })
}

export function deleteGoods (data) {
  return request({
    url:"/goods/delete",
    method:"POST",
    data
  })
}

export function putGoods (data) {
  return request({
    url:"/goods/put",
    method:"POST",
    data
  })
}
export function downGoods (data) {
  return request({
    url:"/goods/down",
    method:"POST",
    data
  })
}
export function getGoodsDetail (data) {
  return request({
    url:"/goods/detail",
    method:"POST",
    data
  })
}

export function editorGoods(data) {
  return axios({
    url: "http://localhost:3000/goods/updateGoods",
    method: "POST",
    data
  })
}

export function buyGoods(data) {
  return request({
    url:"/goods/buy",
    method:"POST",
    data
  })
}

export function getMyOrder(data) {
  return request({
    url:"/goods/sold",
    method:"POST",
    data
  })
}