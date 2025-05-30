---
title: 2025 永豐期貨快速入金
author: S
description: 期貨開戶,期貨入金,永豐期貨入金帳號生成器
date: 2024-12-31 10:00:00 +0800
categories: [開戶流程]
tags: [開戶流程]
pin: true

---

## 永豐期貨入金帳號查詢工具

<p>輸入你的<span class='spotlight'>7位數</span>期貨帳號，快速生成台幣與外幣入金帳戶資訊：</p>

<div class="input-group">
    <label for="inputNumber">輸入期貨帳號（7位數字）：</label>
    <input type="text" id="inputNumber" 
           placeholder="請輸入7位數字"
           maxlength="7"
            oninput="this.value = this.value.replace(/[^0-9]/g, ''); updateTables()">    
        <!-- <button onclick="updateTables()">生成入金帳號</button> -->
    <div id="errorMessage" class="error"></div>
</div>

### 存摺人金台幣帳號
<table id="twdTable">
    <thead>
        <tr>
            <th>幣別</th>
            <th>銀行(代碼)</th>
            <th>期貨入金帳號</th>
        </tr>
    </thead>
    <tbody id="twdTableBody"></tbody>
</table>

### 外幣存摺人金外幣帳號
<table id="fxrTable">
    <thead>
        <tr>
            <th>幣別</th>
            <th>銀行(代碼)</th>
            <th>期貨入金帳號</th>
        </tr>
    </thead>
    <tbody id="fxrTableBody"></tbody>
</table>

<style>

table {
    width: 100%;
    max-width: 600px;
    border-collapse: collapse;
    margin-bottom: 20px;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}
th {
    background-color: #f2f2f2;
}
td{
    align-items: center; /* ★ */
}
h2 {
    margin-top: 30px;
    color:rgb(233, 51, 20);
}
.input-group {
    margin-bottom: 20px;
    /* height: 300px; */
    align-items: center; /* ★ */
}
input {
    width: 200px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
}
button {
    padding: 8px 16px;
    background-color:   rgb(233, 51, 20);
;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background-color: rgb(233, 51, 20);
}
.error {
    color: #d32f2f;
    margin-top: 10px;
}
.light {
    color: red;
    font-weight: bold;
    text-decoration: underline;
    background:white;
    margin-left:2px;
}
.spotlight{
    font-size:20px;
    color: rgb(233, 51, 20);
}
</style>

<script>    
// 資料存成陣列

const accounts = {
    TWD: [
        { name: '永豐銀行 - 世貿分行(807)', prefix: '9985810' },
        { name: '國泰世華銀行 - 館前分行(013)', prefix: '9509' },
        { name: '華南銀行 - 城內分行(008)', prefix: '96160' },
        { name: '中國信託銀行 - 城中分行(822)', prefix: '98002' },
        { name: '台新銀行 - 建北分行(812)', prefix: '9520200' },
        { name: '第一銀行 - 營業部(007)', prefix: '7500931' },
        { name: '板信銀行 - 中正分行(118)', prefix: '9002900' }
    ],
    FXR: [
        { name: '永豐銀行 - 城中分行(807)', prefix: '9996920' },
        { name: '國泰世華銀行 - 國外部(013)', prefix: '9500' },
        { name: '華南銀行 - 城內分行(008)', prefix: '96164' },
        { name: '中國信託銀行 - 營業部(822)', prefix: '98538' }
    ]
};

// 初始化表格
function renderTables() {
    renderTable('TWD', 'twdTableBody');
    renderTable('FXR', 'fxrTableBody');
}

// 渲染單一表格
function renderTable(currency, tableBodyId) {
    const tableBody = document.getElementById(tableBodyId);
    tableBody.innerHTML = ''; // 清空現有內容

    accounts[currency].forEach((account, index) => {
        const row = document.createElement('tr');
        if (index === 0) {
            row.innerHTML = `
                <td rowspan="${accounts[currency].length}">${currency === 'TWD' ? '台幣' : '外幣'}</td>
                <td>${account.name}</td>
                <td id="${currency.toLowerCase()}${index}">${account.prefix}+期貨帳號七碼</td>
            `;
        } else {
            row.innerHTML = `
                <td>${account.name}</td>
                <td id="${currency.toLowerCase()}${index}">${account.prefix}+期貨帳號七碼</td>
            `;
        }
        tableBody.appendChild(row);
    });
}

// 更新表格內容
function updateTables() {
    const input = document.getElementById('inputNumber').value;
    const errorElement = document.getElementById('errorMessage');
    
    errorElement.textContent = '';
    
    if (!input || input.length !== 7) {
        errorElement.textContent = '錯誤：請輸入7位數字';
        return;
    }

    if (!/^\d{7}$/.test(input)) {
        errorElement.textContent = '錯誤：只能包含數字';
        return;
    }

    updateAccountNumbers('TWD', input);
    updateAccountNumbers('FXR', input);
}

// 更新帳號
function updateAccountNumbers(currency, input) {
    accounts[currency].forEach((account, index) => {
        const element = document.getElementById(`${currency.toLowerCase()}${index}`);
        element.innerHTML = `${account.prefix}<span class="light">${input}</span>`;
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', renderTables);

</script>


## 永豐期貨線上開戶免出門

期貨線上開戶網址：<span class="light">[立即點我開戶](https://www.spf.com.tw/spfopenact?strProd=0035&strWeb=0077&s=090640)<span>

（手邊先備好雙證件和存摺）

使用期貨線上開戶大約需要十分鍾時間即可完成

1開始填寫資料 (填寫完後待開戶台確認開戶資料是否完整無誤)

2營業員電話照會風險解說等資訊

3點選E-Mail開戶完成確認信(寄出電子密碼和入金帳號)

[詳細期貨線上開戶流程圖文步驟請點此]()

