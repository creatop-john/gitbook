# edit的編輯

## 最簡單的RWD
因為本次網站內容需要多項不同的編輯，
所以會推薦使用原始碼編輯，
之前說的 **Grid System** 已可做到大方向的排版，
這邊將利用更多的類別來調整細節。
 - A. 全局系列類別
 - B. 微調系列類別
 - C. 其他系列

---

## A. 全局系列類別
- 網站限寬 `wrap`
- 網站背景圖 `bg`

---

## B. 微調系列類別
- 上方內距 `pd-top`
- 下方內距 `pd-bottom`
- 加大-上方內距 `pd-top-lg`
- 加大-下方內距 `pd-bottom-lg`
- 上方推開 `mg-top`
- 下方推開 `mg-bottom`
- 加大-上方推開 `mg-top-lg`
- 加大-上方推開 `mg-bottom-lg`
- 不顯示主標 `hidden-img`
- 放大時不顯示主圖 `hidden-title`
- 文字置中 `ta-center`
- 文字置右 `ta-right`

---

## C. 其他系列
- 名言佳句 `blockquote`
- 兩個欄位以上會垂直置中 `vcenter`

---

## 如何使用
通常是寫在容器的最外層
```
<div class="剛剛這些類別都是放在這邊，用空格分開">
    內容
</div>
```