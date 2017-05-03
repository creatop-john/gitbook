# 版型倉庫

請參閱 `html > template.html`

## 左邊字右邊是圖

![](/assets/template-n1.png)

```
<div class="wrap img100 row vcenter n1-large">
    <!--圖要給尺寸 width="圖片寬" height="圖片高"，不然lazyload會出不來-->
    <div class="col-sm-7"><img class="lazy" data-original="../img/demo/n-series.png" width="1440" height="1440" src="../img/demo/n-series.png" style="display: block;"></div>
    <div class="col-sm-4 col-sm-offset-1">
        <h3 class="fz-h2">N1-Large</h3>
        <h4 class="fz-h4">副標副標副標副標副標副標副標副標</h4>
        <p>您对旅行的热爱使我们投人更多的热情，自1998年经营捷克行程，量年年破新高，2007~2015年出团数超过1750团，40丨000人次! 加利利旅游更荣获捷克外交部颁发奖章，这是对我们一路走来坚持高质量的肯定与励!</p><a href="#">連結名稱</a></div>
</div>
```

**說明**  
這邊是左7右4的排版，  
沒錯加起來就是要等於12\(7+4\)。  
`左7 col-sm-7`這個容器裝圖，  
`右四 col-sm-4`這個容器裝文字，  
在`sm`之下都是一欄式的。

---

## 左邊圖右邊是字

![](/assets/template-2.png)

```
<div class="wrap img100 row vcenter n2-medium">
    <div class="col-sm-5 col-sm-push-7"><img class="lazy" data-original="../img/demo/n-series.png" width="1440" height="1440" alt="" src="../img/demo/n-series.png" style="display: block;"></div>
    <div class="col-sm-6 col-sm-pull-5">
        <h3 class="fz-h2">N2-Medium</h3>
        <h4 class="fz-h4">副標副標副標副標副標副標副標副標</h4>
        <p>您对旅行的热爱使我们投人更多的热情，自1998年经营捷克行程，量年年破新高，2007~2015年出团数超过1750团，40丨000人次! 加利利旅游更荣获捷克外交部颁发奖章，这是对我们一路走来坚持高质量的肯定与励!</p>
        <a href="#">連結名稱</a>
    </div>
</div>
```

**說明**  
這邊是左5右6的排版，  
不對，5+6=11啊?  
的確，  
看起來有些匪夷所思，  
這邊利用push pull的技巧，  
將左右交換，  
加起來不等於12是因為我中間留了一欄的空間。

---

## 滿版三欄

![](/assets/template-3.png)

```
<div class="wrap-fs img100 pd-top-lg pd-bottom pd-bottom-lg" style="background-color:#efefef">
    <div class="row">
        <div class="col-sm-6 col-lg-4 average-child"><img class="lazy" data-original="../img/demo/michelin-1.jpg" width="960" height="500">
            <div class="content">
                <h3 class="fz-h3">布拉格顶级四季酒店</h3>
                <p>世界最佳酒店集团之一，获得AAA 5颗钻石的评级。在四季饭店内享用米其林推荐美食，主厨烹调的特色 美馔、最专业的精致服务、最顶级的盛宴。</p>
                <p class="remark">(如遇餐厅订满或休息，将改由其他米其林推荐料理替代。)</p>
            </div>
        </div>
        <div class="col-sm-6 col-lg-4 average-child"><img class="lazy" data-original="../img/demo/michelin-2.jpg" width="960" height="500">
            <div class="content">
                <h3 class="fz-h3">黄金布拉格餐厅</h3>
                <p>餐厅位于InterContinental五星洲际饭店内，俯瞰伏尔他瓦河，眺望旧城百塔， 穿上优雅服装，沉浸悠闲氛围，美食与美景的惊艳，视觉与味觉的双重感动。</p>
                <p class="remark">(如遇餐厅订满或休息，将改由其他米其林推荐料理替代。)</p>
            </div>
        </div>
        <div class="col-sm-6 col-lg-4 average-child"><img class="lazy" data-original="../img/demo/michelin-1.jpg" width="960" height="500">
            <div class="content">
                <h3 class="fz-h3">布拉格顶级四季酒店</h3>
                <p>世界最佳酒店集团之一，获得AAA 5颗钻石的评级。在四季饭店内享用米其林推荐美食，主厨烹调的特色 美馔、最专业的精致服务、最顶级的盛宴。</p>
                <p class="remark">(如遇餐厅订满或休息，将改由其他米其林推荐料理替代。)</p>
            </div>
        </div>
    </div>
</div>
```

---

## 滿版四欄

![](/assets/template-4.png)

```
<div class="wrap-fs img100 pd-top-lg pd-bottom pd-bottom-lg" style="background-color:#efefef">
    <div class="row">
        <div class="col-sm-6 col-lg-3 average-child"><img class="lazy" data-original="../img/demo/michelin-1.jpg" width="960" height="500">
            <div class="content">
                <h3 class="fz-h3">布拉格顶级四季酒店</h3>
                <p>世界最佳酒店集团之一，获得AAA 5颗钻石的评级。在四季饭店内享用米其林推荐美食，主厨烹调的特色 美馔、最专业的精致服务、最顶级的盛宴。</p>
                <p class="remark">(如遇餐厅订满或休息，将改由其他米其林推荐料理替代。)</p>
            </div>
        </div>
        <div class="col-sm-6 col-lg-3 average-child"><img class="lazy" data-original="../img/demo/michelin-2.jpg" width="960" height="500">
            <div class="content">
                <h3 class="fz-h3">黄金布拉格餐厅</h3>
                <p>餐厅位于InterContinental五星洲际饭店内，俯瞰伏尔他瓦河，眺望旧城百塔， 穿上优雅服装，沉浸悠闲氛围，美食与美景的惊艳，视觉与味觉的双重感动。</p>
                <p class="remark">(如遇餐厅订满或休息，将改由其他米其林推荐料理替代。)</p>
            </div>
        </div>
        <div class="col-sm-6 col-lg-3 average-child"><img class="lazy" data-original="../img/demo/michelin-1.jpg" width="960" height="500">
            <div class="content">
                <h3 class="fz-h3">布拉格顶级四季酒店</h3>
                <p>世界最佳酒店集团之一，获得AAA 5颗钻石的评级。在四季饭店内享用米其林推荐美食，主厨烹调的特色 美馔、最专业的精致服务、最顶级的盛宴。</p>
                <p class="remark">(如遇餐厅订满或休息，将改由其他米其林推荐料理替代。)</p>
            </div>
        </div>
        <div class="col-sm-6 col-lg-3 average-child"><img class="lazy" data-original="../img/demo/michelin-2.jpg" width="960" height="500">
            <div class="content">
                <h3 class="fz-h3">黄金布拉格餐厅</h3>
                <p>餐厅位于InterContinental五星洲际饭店内，俯瞰伏尔他瓦河，眺望旧城百塔， 穿上优雅服装，沉浸悠闲氛围，美食与美景的惊艳，视觉与味觉的双重感动。</p>
                <p class="remark">(如遇餐厅订满或休息，将改由其他米其林推荐料理替代。)</p>
            </div>
        </div>
    </div>
</div>
```

---

## 其他型式

![](/assets/template-5.png)

```
<div class="wrap-fs img100 pd-top-lg pd-bottom pd-bottom-lg" style="background-color:#efefef">
    <div class="col-md-4 col-md-offset-4 row mg-bottom txt-center">
        <h2 class="fz-h1">米其林飨宴<br>味蕾的绮丽梦想</h2>
        <p class="subtitle">米其林是欧洲最具公信力的美食评鉴,特别为您安排于布拉格体米其林的幸褔飨宴。</p>
        <p class="remark">(如遇餐厅订满或休息，将改由其他米其林推荐料理替代。)</p>
    </div>
    <div class="wrap">
        <div class="row col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
            <div class="col-sm-6 average-child"><img class="lazy" data-original="../img/demo/michelin-1.jpg" width="960" height="500" src="../img/demo/michelin-1.jpg" style="display: block;">
                <div class="content">
                    <h3 class="fz-h3">布拉格顶级四季酒店</h3>
                    <p>世界最佳酒店集团之一，获得AAA 5颗钻石的评级。在四季饭店内享用米其林推荐美食，主厨烹调的特色 美馔、最专业的精致服务、最顶级的盛宴。</p>
                    <p class="remark">(如遇餐厅订满或休息，将改由其他米其林推荐料理替代。)</p>
                </div>
            </div>
            <div class="col-sm-6 average-child"><img class="lazy" data-original="../img/demo/michelin-2.jpg" width="960" height="500" src="../img/demo/michelin-2.jpg" style="display: block;">
                <div class="content">
                    <h3 class="fz-h3">黄金布拉格餐厅</h3>
                    <p>餐厅位于InterContinental五星洲际饭店内，俯瞰伏尔他瓦河，眺望旧城百塔， 穿上优雅服装，沉浸悠闲氛围，美食与美景的惊艳，视觉与味觉的双重感动。</p>
                    <p class="remark">(如遇餐厅订满或休息，将改由其他米其林推荐料理替代。)</p>
                </div>
            </div>
        </div>
    </div>
</div>
```



