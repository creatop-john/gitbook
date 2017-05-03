# edit內的各種形式

## 預設類別

### 全局系列
- 網站限寬 `wrap`
- 網站背景圖 `bg`
- 名言佳句 `blockquote`
- 兩個欄位以上會垂直置中 `vcenter`

### 微調系列
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



### 如何使用
```
<div class="剛剛這些類別都是放在這邊，用空格分開">
    內容
</div>
```
---

## wrap

**限寬**
```
<div class="wrap">
    內容
</div>
```
**不限寬**
```
<div>
    內容
</div>
```
*chrome開發者視窗實作測試*

---

## wrap


```
<div class="wrap img100 row vcenter">
    <!--圖要給尺寸 width="圖片寬" height="圖片高"，不然lazyload會出不來-->
    <div class="col-sm-7"><img class="lazy" data-original="../img/demo/n-series.png" width="1440" height="1440" src="../img/demo/n-series.png" style="display: block;"></div>
    <div class="col-sm-4 col-sm-offset-1">
        <h3 class="fz-h2">N1-Large</h3>
        <h4 class="fz-h4">副標副標副標副標副標副標副標副標</h4>
        <p>您对旅行的热爱使我们投人更多的热情，自1998年经营捷克行程，量年年破新高，2007~2015年出团数超过1750团，40丨000人次! 加利利旅游更荣获捷克外交部颁发奖章，这是对我们一路走来坚持高质量的肯定与励!</p>
        <a href="#">連結名稱</a>
    </div>
</div>
```