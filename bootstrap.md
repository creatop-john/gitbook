# 格線系統Grid System

### 

### 為什麼需要用 Grid System

因為為了符合設計的多樣性，  
又能達到RWD的效果，  
所以導入 **bootstrap** 中的的 **Grid System** 來協助。

---

## 格線系統 Grid System是什麼東西

**Grid System** 是 **bootstrap** 中的一個很實用的功能，  
他把所有設計都分割成12欄，  
也就是說，  
每一行就是12欄，  
無論你怎麼組合，  
於是就可以有多種變化。

```
兩欄
12 = 11 + 1
12 = 10 + 2
12 = 9 + 3
12 = 8 + 4
12 = 7 + 5
12 = 6 + 6

三欄
12 = 4 + 4 + 4

四欄
12 = 3 + 3 + 3 + 3
```

---

### 什麼是bootstrap

有興趣可以看看 [bootstrap中文官網](https://kkbruce.tw/bs3/)

---

### 格線系統是什麼樣的概念

**一排12欄等分**

```
<div class="row">
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
</div>
```

**8:4**

```
<div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-md-4">.col-md-4</div>
</div>
```

**一排3欄等分**

```
<div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
</div>
```

**一排2欄等分**

```
<div class="row">
    <div class="col-md-6">.col-md-6</div>
    <div class="col-md-6">.col-md-6</div>
</div>
```

## 不同的尺寸可以有不同的組合

詳情請參閱[格線系統](https://kkbruce.tw/bs3/CSS#grid)

