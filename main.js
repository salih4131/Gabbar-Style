/*Ostim sanayideki Cabbar Ustamizin uzmanlik alani, belli araba modellerini kapsamaktadir. Bundan dolayi Cabbar Usta online 
arac kabul sistemi icin bizden bir program istemektedir. Bu programin flowchartini da yaninda talep etmektedir.
Bu program asagidaki durumlari kontrol edebilmelidir.

1. Cabbar Usta sadece kirmizi ve siyah arabalari tamir etmektedir.
2. Sadece BMW, Audi ve VW markalarini kabul etmektedir.
3. BMW arabalarinda sadece kirmizi olanlari ve yas araligi 2010 ile 2019 arasindakileri kabul etmektedir.
4. Audi de ise sadece yas araligi 2005 ile 2010  veya 2014 ile 2020 arasindakileri kabul etmektedir.
5. VW de ise sadece siyah olanlari ve yas araligi 2001 ile 2018 arasindakileri kabul etmektedir.
6. Bu seneden itibaren de Cabbar Usta, 2020 cikisli siyah renkli BMWleri de kabul etmektedir.
7. 5 yildan uzun sureli sabit musterilerine ise, tum araba modellerinde (tum yas araligi ve tum renkler)
 hizmet vermektedir.*/
 
 let Marka = "Vw";//or "audi", "vw"
 let Color = "Siyah";//or "siyah"
 let CostumerYear = 4;
 let Model = "2018";//or between 2001 und 2020

 if (CostumerYear >= 5){
    console.log ("Aracı servise kabul et"); 
}else if((Marka == "Bmw") && ((Color == "Kirmizi") && ((Model >= 2010) && (Model <= 2019))) || ((Color == "siyah") && (Model == 2020))){
    console.log ("Aracı servise kabul edin");
}else if((Marka == "Audi") && (((Model >= 2005) && (Model <= 2010)) || (Model >= 2014) && (Model <= 2020))){
    console.log ("Aracı servise kabul edin");
}else if((Marka == "Vw") && (Color == "Siyah") && ((Model >= 2001) && (Model <= 2018))){
    console.log ("Aracı servise kabul edin");
}else{
    console.log ("Arac servise kabul edilemez")
}

