"use strict";

// blog's Product data array
const products = [
  {
    id: "evirest",
    name: "Evirest",
    img: "assets/images/evirest.png",
    alt: "D Vitamini",
    composition: "Vitamin E 150mg",
    pharmaGroup: "Vitamin",
    indications: `E vitamininin hipovitaminozu Menstrual tsikl pozulması, hamiləliyin pozulması təhlükəsi, klimakterik vegetativ pozulmalar Kişi cinsi
    sistemin disfunksiyası. Kişi və qadın sonsuzluğu Dəri xəstəlikləri (dermatit, psoriaz, trofiki xoralar, ekzema) Göz xəstəlikləri (Göz dibinin sklerotik dəyişikliyi) Travmalardan, ağır somatik
    xəstəliklərdən sonra bərpa dövründə Şəkərli diabet, hormonal disbalans. Şəkərli diabet, hormonal disbalans Antioksidant terapiya lazım olan
    xəstəliklər zamanı.`,
    dosage: "EVIREST 1 kapsul gündə 1 dəfə qebul edilir",
  },
  {
    id: "oftoqrin",
    name: "Oftoqrin",
    img: "assets/images/blog-img/oftoqrin-1.png",
    alt: "Göz üçün vitamin kompleksi",
    composition: `1 kapsulda:,
    Qaragilə meyvəsinin q.e - 200 mq,
    Vitamin C (Ascorbic acid) - 75 mkq,
    Lütein(Lutein)-10mq,
    Vitamin E - 10mq,
    Vitamin B12 - 9mkq,
    Vitamin B1 - 4.5mq,
    Selen - 150mkq,
    Ginkoyarpağıekstraktı - 30mq`,
    pharmaGroup: "Vitamin Kompleksi",
    indications: `Oxuma, kontakt linzalardan istifadə və kompyuterdən istifadə zamanı baş verən göz yorğunluğu və göz
    ağrıları zamanı; yaxındangörmənin kompleks müalicəsində; diabetik retinopatiya; gözün torlu qişasının
    mərkəzi və periferik distrofiyası; gözlərdə aparılan cərrahi əməliyyatdan sonra bərpa dövründə; gözün
    qaranlığa adaptasiya qabiliyyətinin zəifləməsi zamanı; yaşla əlaqədar gözlərin struktur dəyişkənliyi;
    göz travmalarından sonra bərpa dövrü; idmanla məşğul olanlara (külək serfingi, dağ xizəyi, alpinizm).`,
    dosage: `14 yaşdan yuxarı 1 kapsul gündə 1 dəfə. Tövsiyə edilən sutkalıq dozanı keçməyin. Digər hallarda
    həkimlə məsləhətləşin.`,
    special: `Hamiləlik və laktasiya dövründə, xəstəlik və ya dərman istifadəsi zamanı həkimlə məsləhətləşin.`,
    contraindications: `Məhsulun hər hansı bir komponentinə qarşı fərdi həssaslıq, 14 yaşa qədər uşaqlar.`,
    sideeffects: `Allergik reaksiyalar.`,
  },
  {
    id: "otitron",
    name: "Otitron",
    img: "assets/images/blog-img/otitron.png",
    alt: "Qulaq damcısı, antiseptik, iltihab əleyhinə",
    composition: `1 ml-də:,
    Çay ağacı yağı (Melaleuca leucadendron cajaputi oil) – 15 mq,
    Mixək ağacı yağı (Eugenia caryophyllata bud oil) – 10 mq,
    Badam yağı (Prunus amygdalus dulcis oil) – 10 mq,
    Qara qarağat yağı (Ribes nigrum oil) – 10 mq,
    Boraj toxumlarının yağı (Borago officinalis seed oil) – 15 mq,
    Ardıc meyvələrinin yağı (Juniperus communis fruit oil) – 10 mq,
    Soya yağı (Glycine soja (soybean) oil) – 10 mq,
    Propolis (Propolis extract) – 10 mq,
    Bisabolol (Bisabolol) – 10 mq,
    E vitamini (Tocopheryl acetate) – 10 mq`,
    pharmaGroup: `Yerli istifadə üçün antiseptik, iltihab əleyhinə, anestetik (ağrıkəsici), yumşaldıcı təsirlərə malik,
    eşitmə itkisinin qarşısını alan qulaq damcısı.`,
    indications: `Kəskin və ya xroniki otit, eksudativ orta otit, qripdən sonra yaranan otit, eksudativ viral otit,
    barotravmatik otit, otomikoz, otalgiya, mastoidit, konduktiv və sensonevral eşitmə itkisi, qulaq
    kanalını qulaq kirindən təmizləmək üçün, kirəcləşmiş qulaq kirinin (“qulaq tıxacları”) yumşaldılması və xaric
    edilməsi məqsədi ilə, qulaq tıxaclarının yaranmasının qarşısının alınması məqsədi ilə`,
    dosage: `4 yaşa qədər 1-2 damcı gündə 2 dəfə, 4-14 yaş 2 damcı gündə 2-3 dəfə, 14 yaşdan yuxarı və böyüklərə 3-4
    damcı gündə 3-4 dəfə tövsiyə olunur.`,
    sideeffects: `Nadir hallarda dəri reaksiyaları, ürəkbulanma və qusma.`,
    contraindications: `Preparatın tərkibindəki hər hansı komponentə qarşı yüksək həssaslıq.`,
    pregnancy: `Mümkündür.`,
  },
  {
    id: "artisil",
    name: "Artisil",
    img: "assets/images/blog-img/artisil.png",
    alt: "Hepatoprotektor, dezintoksikant, hipoazotemik, hipoammoniemik, öd qovucu",
    composition: `1 kapsulda:,
    Fosfolipidlər – 150 mq,
    Artichoke – 180 mq,
    Silymarin – 150 mq,
    L-ornitin – 200 mq`,
    pharmaGroup: `Hepatoprotektor, dezintoksikant, hipoazotemik, hipoammoniemik, öd qovucu`,
    indications: `Xroniki virus hepatitləri.
    Keçirilmiş kəskin virus hepatitlərindən sonrakı reabilitasiya dövrü.
    Piy mübadiləsinin pozulması ilə əlaqədar qaraciyərin zədələnməsi, o cümlədən steatoz (piy hepatozu) və
    qaraciyərin distrofiyası.
    Müxtəlif etiologiyalı qaraciyər sirrozları.
    Lipid-xolesterin mübadiləsi pozğunluğunun kompleks müalicəsi.
    Müxtəlif ağırlıq dərəcəsində olan qaraciyər ensefalopatiyaları.
    Xəstələrin zülal çatışmazlığında parenteral qidalandırılması zamanı.
    Hamiləlik toksikozları.
    Daşsız xroniki xolesistit, öd yollarının hipokinetik diskeniziyası.
    Hepatotoksik preparatların qəbulu zamanı və qaraciyərin dərman zəhərlənmələri.
    Üzvi mənşəli həlledicilərlə zəhərlənmələr.
    Ağır metal, hallogen və karbohidrogen zəhərlənmələri.
    Etil spirti ilə kəskin zəhərlənmələr, alkoqolizm, alkoqol qəbulu zamanı qaraciyərin zəhərlənmələri.`,
    dosage: `1 kapsul gündə 2-3 dəfə`,
    sideeffects: `Nadir hallarda dəri reaksiyaları, ürəkbulanma və qusma.`,
    contraindications: `Kəskin böyrək çatışmazlığı, preparatın tərkibindəki hər hansı komponentə qarşı yüksək həssaslıq.`,
    pregnancy: `Hamiləlik zamanı preparatın qəbulu həkim nəzarəti altında aparılmalıdır. Müalicə dövründə südverməni dayandırmaq lazımdır.`,
  },
  {
    id: "qrifofer-kids",
    name: "Qrifofer kids",
    img: "assets/images/blog-img/qrifofer-kids.png",
    alt: "Antianemik sirop",
    composition: `Hər 5 ml siropda:,
    Dəmir qlükonat – 170 mq,
    Fol turşusu – 200 mkq,
    Vitamin B12 – 1,5 mkq,
    Vitamin C – 30 mq`,
    pharmaGroup: "Antianemik",
    indications: `Dəmirdefisitli anemiya.,
    Fol turşusu defisiti. Eyni vaxtda müşahidə olunan dəmir və fol turşusu defisitli anemiyaların profilaktikası və müalicəsi.,
    Vitamin B12 defisiti. Eyni vaxtda müşahidə olunan dəmir və vitamin B12 defisitli anemiyaların profilaktikası və müalicəsi.`,
    dosage: `Gündə 1-2 dəfə yeməkdən 1 saat sonra qəbul olunur. Müalicə müddəti 1-3 aydır. 1.5 yaş arası uşaqlar 5 ml`,
    sideeffects: `Ürəkbulanma, qusma, qastralgiya, qəbizlik və ya diareya. Nadir hallarda dispeptik əlamətlər, başgicəllənmə və allergik reaksiyalar.`,
    contraindications: `Preparatın tərkibindəki hər hansı komponentə qarşı hiperhəssaslıq. Hemolitik anemiya, hemoxromotoz, hemosideroz, aplastik anemiya.`,
    overdose: `Anoreksiya, iştahanın azalması, başgicəllənmə, halsızlıq, ürəkbulanma, qusma.`,
    form: `Qrifofer Kids xüsusi karton qutuda 150 ml flakon`,
  },
  {
    id: "alforat",
    name: "Alforat",
    img: "assets/images/blog-img/Alforat.png",
    alt: "İnyeksiya üçün məhlul",
    composition: `1 ampulda(4 ml): Xolin alfosserat – 1000 mq ,
    Köməkçi maddələr: İnyeksiya üçün su – 4 ml qədər`,
    pharmaGroup: "Nootrop vasitə. ATC kodu N07AX02.",
    indications: `İşemik və hemorragik insult (erkən və gec bərpa dövrü); kəllə-beyin travması (əsasən beyin sapının zədələnmə səviyyəsi ilə kəskin dövr - şüurun pozulması, koma, fokal yarımkürə simptomları, beyin sapının zədələnməsi əlamətləri); xroniki serebrovaskulyar çatışmazlıq (dissirkulyator ensefalopatiya); degenerativ və ya involusiya mənşəli serebral psixoorqanik sindromlar və serebrovaskulyar çatışmazlığın nəticələri, işemik və hemorragik insultdan sonra bərpa dövrü; demensiya (Alzheimer, qocalıq, qarışıq formalar), Alzheimer xəstəliyi; Huntington xoreası; koqnitiv pozğunluqlar: yaşlılarda yaddaşın pozulması, çaşqınlıq, oriyentasiyanın pozulması, motivasiya və təşəbbüsün azalması, konsentrasiya qabiliyyətinin azalması ilə xarakterizə olunan birincili və ikincili zehni funksiya pozğunluqları, o cümlədən demensiya və ensefalopatiya zamanı; emosional və davranış sferasında dəyişikliklər: emosional qeyri-sabitlik, əsəbilik, marağın azalması; qocalıq psevdomelanxoliyası.`,
    dosage: `Əzələdaxili və ya venadaxili olaraq tətbiq edilir. Preparatı inyeksiya yolu ilə təyin edərkən tövsiyə olunan doza gündə bir ampula (1000 mq/4 ml) əzələdaxili (yavaş) və ya venadaxili (damcı) təşkil edir. Venadaxili istifadə üçün bir ampulun (4 ml) tərkibi 50 ml 0,9% natrium xlorid məhlulunda həll edilir, infuziya sürəti dəqiqədə 60-80 damcıdır. Müalicə müddəti adətən 10-15 gündür. Müalicə kursunun müddəti xəstəliyə, dərmanın tolerantlığına və əldə edilən effektə əsasən həkim tərəfindən müəyyən edilir.`,
    sideeffects: `Adətən, preparat yaxşı tolerantlağa malikdir.,
    <b>Mümkün olan əlavə təsirlər:</b>,
    Həzm sistemi tərəfindən - qəbizlik, ishal, ürəkbulanma, ağızda quruluq, farinqit.,
    Sinir sistemi tərəfindən - baş ağrısı, yuxululuq, yuxusuzluq, aqressivlik, narahatlıq, gərginlik, beyin işemiyası, qıcolmalar, başgicəllənmə.,
    Dəri örtüyü tərəfindən - səpgi, qızartı.,
    Digər: Vurulduğu yerdə lokal ağrı, sidik ifrazı tezliyinin artması.`,
    contraindications: `Xolin alfosserata qarşı hiperhəssaslıq; hemorragik insult (kəskin mərhələsi); hamiləlik, südvermə dövrü; 18 yaşına qədər olan uşaqlar.`,
    interactions: `Kliniki cəhətdən əhəmiyyətli olan preparatın digər dərman vasitələri ilə qarşılıqlı təsiri müəyyən edilməmişdir.`,
    pregnancy: `Preparatın hamiləlik və laktasiya dövründə istifadəsi qadağandır!`,
    special: `Ürəkbulanmanın meydana gəlməsi mümkündür (əsasən dopaminergik aktivləşmənin nəticəsi kimi), bu halda preparatın dozası azaldılır.,
    Müalicə müddətində nəqliyyat vasitələrini idarə edərkən diqqət və psixomotor reaksiyaların sürətinin yüksək olmasını tələb edən potensial təhlükəli fəaliyyətlərlə məşğul olarkən ehtiyatlı olmaq lazımdır.`,
    storage: `İşıqdan qorunan yerdə, 25°C-dən yuxarı olmayan temperaturda saxlanmalıdır. Uşaqların əli çatmayan yerdə saxlanmalıdır.`,
    expiry: `5 il. Qablaşdırmada göstərilmiş saxlanma müddəti bitdikdən sonra istifadə etməyin.`,
    form: `Venadaxili və əzələdaxili tətbiq üçün məhlul 1000 mg/4 ml, 4 ml ampullarda. İçlik vərəqə ilə birlikdə 3 ampul karton qutuya qablaşdırılıb.`,
  },
  {
    id: "migresil",
    name: "Migresil",
    img: "assets/images/blog-img/migresil-large.png",
    alt: "Miqren əleyhinə",
    composition: `Magnezium oksid 250 mq,
    Dağ tərxunu yarpağının ekst. 30 mq,
    Vitamin B2 35 mq, 
    Köməkçi maddələr: Təbii jelatin (natural gelatin), qarğıdalı nişastası`,
    pharmaGroup: "Miqren əleyhinə",
    indications: `Miqren ağrıları zamanı`,
    dosage: `Daxilə, 1 kapsul gün ərzində 1 dəfə təyin olunur.`,
    contraindications: `Tərkibindəki komponentlərə qarşı fərdi həssaslıq.`,
    form: `N30 tabletka.`,
  },
  {
    id: "akvenol",
    name: "Akvenol gel-balzam 75ml",
    img: "assets/images/blog-img/akvenol-large.png",
    alt: "Hepatoprotektor,dezintoksikant,hipoazotemik,hipoammoniemik,öd qovucu ",
    stock: "Stokda yoxdur",
    composition: `Ətirli sədo ekstraktı,
    Yaşıl çay ekstraktı,
    At şabalıdı ekstraktı,
    Tarla qatırquyruğu ekstraktı,
    Yapon soforası ekstraktı,
    Heparin,
    Mentol,
    Kamfora,
    Bibəriyə yağı,
    Nanə yağı`,
    pharmaGroup: "Kombinə olunmuş angioprotektor və venotonik vasitə",
    pharmaFeatures: `Əsas aktiv maddəsi rutin sayəsində qan damarlarının divarlarını möhkəmləndirir, onların elastikliyini təmin edir.`,
    indications: `Aşağı ətraflarda venaların varikoz genişlənməsi
    Xroniki venoz çatışmazlıq
    Trombozlar, tromboflebitlər, flebitlər (kəskin və xroniki)
    Neyropatiyalar, angiopatiyalar
    Ayaqlarda ödem və hiperemiya
    Ayaqlarda əzələ gərginliyi, yorğunluq hissi
    Podaqra, revmatizm
    Artritlər, artrozlar
    Osteoxon`,
    dosage: `Gel-balzam az miqdarda zədələnmiş nahiyəyə, venalar boyunca aşağıdan üzü yuxarı istiqamətində gündə 3 dəfə sürtülür. Venoz çatışmazlıq zamanı preparat aşağı ətraflara yüngül əl hərəkətləri ilə 3 dəqiqə ərzində masaj edilir. Müalicə kursu 6-8 həftə davam edir.`,
    sideeffects: `Preparatın tərkibindəki hər hansı komponentə qarşı individual həssaslıq, allergik reaksiya.`,
    contraindications: `Açıq yaralar, qanaxmalar, preparatın hər hansı bir komponentinə qarşı həssaslıq.`,
    form: `Gel-balzam 75 ml.`,
  },
  {
    id: "enseqam",
    name: "Enseqam",
    img: "assets/images/blog-img/enseqam.png",
    alt: "Serebrovaskulyar çatışmazlıq üçün",
    composition: `Qamma aminobutirik turşusu 250 mq,
    Qlisin 75 mq,
    L-glutamin 50 mq,
    Maqnezium 50 mq,
    Vitamin B16 0.5 mq,
    Fol turşusu 0.005 mq`,
    pharmaGroup: "-",
    indications: `Serebrovaskulyar çatışmazlıq, dissirkulyator ensefalopatiyalar
    Zehni fəaliyyətin və yaddaşın zəifləməsi
    Stress və psixoemosional gərginlik (imtahan, konflikt vəziyyətlər)
    Sinir sisteminin funksional xəstəlikləri (nevrozlar, vegetativ damar distoniyası)
    Kəllə-beyin travmalarından sonrakı reabilitasiya dövrü
    İşemik insultdan sonrakı reabilitasiya dövrü
    Neyropatiyaların müalicəsi (oturaq, üz, üçlü sinir)
    Fizioloji qocalma ilə əlaqədar yaddaş zəifliyi, demensiyalar
    Müxtəlif mənşəli yuxu pozulmaları`,
    dosage: `Orta səviyyəli pozulmalar zamanı 1 tabletdən gündə 1 dəfə. Ağır dərəcəli pozulmalar zamanı 1 tabletdən
    gündə 2 dəfə yemək vaxtı və ya yeməkdən sonra.`,
    sideeffects: `Nadir hallarda dispeptik əlamətlər, başgicəllənmə və allergik reaksiyalar.`,
    contraindications: `Hiperhəssaslıq, 12 yaşa qədər uşaqlar, hamiləlik və laktasiya dövrü.`,
    overdose: `Anoreksiya, iştahanın azalması, başgicəllənmə, halsızlıq, ürəkbulanma, qusma.`,
    form: `ENSEQAM № 30. Hər biri 15 tabletdən ibarət 2 blister və məlumat vərəqi ilə birlikdə karton qutularda
    qablaşdırılır.`,
  },
  {
    id: "qrenzim",
    name: "Qrenzim",
    img: "assets/images/blog-img/qrenzim-large.png",
    alt: "Həzm prosesini yaxşılaşdıran, polienzim preparat",
    composition: `Pankreatin 100 mq,
    Serepepitaza 120000 bv,
    XİMOTRİPSİN 5 mq,
    Bromelain 10 mq,
    Pepsin 10 mq`,
    pharmaGroup: `Həzm prosesini yaxşılaşdıran, polienzim preparat`,
    indications: `Mədəaltı vəzin xarici sekretor funksiyasının çatmamazlığı; Pankreatit, Mukovisidoz
    Mədə-bağırsaq, qaraciyər və öd kisəsi iltihabi–degenerativ xəstəlikləri zamanı
    Şüa müalicəsi və əməliyyatdan sonra ortaya çıxan meteorizm və həzm pozulmaları
    Yeməkdən sonra metiorizm şikayətləri, diareyalar
    Əməliyyatdan sonrakı ağırlaşmaların profilaktikası və müalicəsi Müxtəlif xəstəliklər zamanı arteriya, arteriol və kapilyarların zədələnmələri,Limfadurğunluğu Yuxarı və aşağı tənəffüs yollarının müxtəlif mənşəli kəskin infeksiyaları, xroniki bronxit
    Atopik dermatit (xroniki allergik dermatit)
    Revmatid artrit, ankilozlaşmış spondilit, revmatizm
    Müxtəlif lokalizasiyalı sidik çıxarıcı yol infeksiyaları, kəskin və xroniki tubulointerstisial nefrit
    Kişi cinsi orqanlarının infeksion xəstəlikləri (prostatit)
    Qadınlarda kiçik çanaq orqanlarının müxtəlif mənşəli iltihabi xəstəlikləri, diffuz kistoz mastopatiya`,
    pregnancy: `Hamiləlik və laktasiya dövründə istifadəsi mümkündür, lakin hamilə qadınlar həkim məsləhəti ilə preparatı qəbul etməlidirlər.`,
    dosage: `Mədəaltı vəzin funksiyalarının çatışmazlığının dərəcəsindən asılı olaraq doza seçilir. QRENZİM 2-3 kapsul hər qida qəbulu zamanı maye ilə çeynəmədən qəbul olunur. Müalicə kursu bir neçə aya kimi davam edə bilər.`,
    sideeffects: `Uzunmüddətli, yüksək dozalarda qəbulu zamanı heç bir əlavə təsir müşahidə edilməmişdir. Nadir hallarda nəcisin konsistensiyasında və iyində dəyişikliklər, dəridə xırda səpgilər baş verir. Digər əlavə təsirlər müşahidə edildikdə dərhal həkimə müraciət edilməlidir.`,
    contraindications: `Preparatın hər hansı komponentinə qarşı hiperhəssaslıq.`,
    storage: `Uşaqların əli çatmayan yerdə 25°C-dən aşağı otaq temperaturunda saxlanılmalıdır.`,
    form: `Qrenzim N30 kapsul.`,
  },
  {
    id: "qrifosed",
    name: "Qrifosed",
    img: "assets/images/blog-img/qrifosed.png",
    alt: "Bitki tərkibli sedative, spazmolitik antidepresan preparat.",
    composition: `Passiflora ekstraktı 125 mq,
    Yemişan ekstraktı 125 mq,
    Melissa ekstraktı 100 mq,
    Maqnezium 200 mq,
    B6 vitamini 5 mq,
    (qastrorezistent tabletlər)`,
    pharmaGroup: `Bitki tərkibli sedative, spazmolitik antidepresan preparat.`,
    indications: `Yüksək sinir oyanıqlığı, Stres, əsəb gərginliyi, Yuxu pozğunluğu, yuxusuzluq, Simpatik aktivlik fonunda sıx ürək ritmi, Həyəcan və özünə güvənməmə halları, Xroniki yorğunluq, fiziki və psixi tükənmə, asteniya, Ağrı və əzələ spazmı, gastrointestinal spazm, Hamilə qadınlarda hipertonus`,
    pregnancy: `Hamiləlik və laktasiya dövründə preparatın təyini mümkündür.`,
    dosage: `QRİFOSED yüksək sinir oyanıqlığı, stress, əsəbilik hallarında 1 həb gün ərzində 2-3 dəfə təyin edilir. Yuxu pozğunluğu zamanı isə 2 həb yatmazdan əvvəl təyin edilir, hamilə qadınlarda hipertonus zamanı 1 həb gün ərzində 2-3 dəfə təyin edilir.`,
    sideeffects: `Nadir hallarda halsızlıq və dispeptik əlamətlər.`,
    contraindications: `Preparatın hər hansı komponentlərinə qarşı həssaslıq. 8 yaşa qədər uşaqlar`,
    storage: `Uşaqların əli çatmayan yerdə 25°C-dən aşağı otaq temperaturunda saxlanılmalıdır.`,
    form: `QRİFOSED № 30. 2 blister 10 tabletdən ibarət içlik vərəqi ilə birgə karton qablamada istehsal edilir.`,
  },
  {
    id: "qliders",
    name: "Qliders",
    img: "assets/images/blog-img/qliders.png",
    alt: "Metabolik vasitə,MSM fəaliyyətini yaxşılaşdıran vitamin",
    composition: `Qlisin 50mq,
    Vitamin D3 200BV,
    Vitamin B1 1mq,
    Vitamin B9 300mkq,
    Vitamin B12 2.5 mq`,
    pharmaGroup: `Metabolik vasitə, MSM fəaliyyətini yaxşılaşdıran vitamin`,
    indications: `Zehni fəaliyyət və yaddaşın zəifləməsi, Stress vəziyyətlər və psixoemosional yüklənmə (imtahan, konfilikt vəziyyətlər zamanı), Funksional sinir xəstəlikləri (sinir gərginliyi, beyin fəaliyyətinin zəifləməsi, emosional labillik və yuxunun pozulmasi ilə müşayiət olunduqda), İşemik insultun kompleks müalicəsi, Müxtəlif mənşəli ensefalopatiyaların, neyroinfeksiyaların sonraki qaliq əlamətlərinin kompleks müalicəsi, Nevrozlar və nevrozabənzər hallar`,
    dosage: `4-14 yaş arası uşaqlarda: 5ml gündə 3 dəfə. 14 yaşdan yuxarı uşaqlar və böyüklər: 10 ml gündə 3 dəfə qəbulu tövsiyə olunur.`,
    contraindications: `Preparatın tərkibindəki hər hansı komponentə qarşı hiperhəssaslıq, hiperkalsemiya, hiperkalsiuriya, D hipervitaminozu, cari xroniki hiperkalsemiyalı xəstələrdə nefrolitiaz, nefrokalsinoz.`,
    form: `75 ml tubda içlik vərəqəsi ilə birlikdə karton qutularda qablaşdırılır.`,
  },

  {
    id: "glistofit",
    name: "Glistofit",
    img: "assets/images/blog-img/glistofit.png",
    alt: "Bağırsaq helmintləri əleyhinə geniş spektrli vasitə",
    composition: `Adi kəklikotu otunun quru ekstraktı 300mq, Dərman gülümbaharı çiçəklərinin quru ekstraktı 250mq, Adi zirə meyvələrinin quru ekstraktı 200mq`,
    pharmaGroup: `Bağırsaq helmintləri əleyhinə geniş spektrli vasitə`,
    indications: `Nematodozlar (askaridoz, enterobioz), Sestodozlar (exinokokkoz), İbtidai parazitar infeksiyalar (lyambliyoz), Qarışıq helmintozlar, Bağırsaqlarda dizbakterioz, İnfeksion xəstəliklərin kompleks müalicəsi`,
    dosage: `4-14 yaş arası uşaqlar: 5ml gündə 1 dəfə. 14 yaşdan yuxarı uşaqlar və böyüklər: 5ml gündə 2 dəfə qəbulu tövsiyyə olunur.`,
    contraindications: `Qalaktozemiya, bağırsaq keçməməzliyi, preparatın aktiv komponentinə qarşı hiperhəssaslıq`,
    form: `Şüşə flakonda 100ml sirop.`,
  },
  {
    id: "sevasteron",
    name: "Sevasteron",
    img: "assets/images/blog-img/sevasteron.png",
    alt: "Menopauzada istifadə olunan vasitə",
    composition: `Ərküdə ağacı 135mg,
    Soya bitkisi 200mg,
    Üçyarpaq yoncası 60mg,
    Damotu 30mg,
    Vitamin B3 13mg,
    L fenilalanin 14mg,
    Vitamin B6 2mg`,
    pharmaGroup: `Menopauzada istifadə olunan vasitə`,
    indications: ` Klimakterik sindrom, Süd vəzisi və uşaqlıq boynu şişlərinin profilaktikası, Menstrual tsikl pozğunluqları,
    amenoreya, yumurtalıqların disfunksiyası, Prolaktin fermentinin artması zamanı, Follikulun yetişməməsi
    zamanı, Menopauza ilə əlaqəli hormonal disbalansın tənzimlənməsi`,
    dosage: `SEVASTERON 1 kapsul gündə 1 dəfə`,
    contraindications: `Hamiləlik və laktasiya zamani, məhsulun tərkibindəki hər hansı komponentinə qarşı hiperhəssaslıq`,
    storage: `Uşaqların əli çatmayan yerdə, 25 ºC temperaturda saxlanılmalıdır.`,
    form: `SEVASTERON N30 2 blisterdə, içlik vərəqə ilə karton qutuda.`,
  },
  {
    id: "regenrofon",
    name: "Regenrofon",
    img: "assets/images/blog-img/regenrofon.png",
    alt: "Anal çatlar, İltihablanmış hemorroidal düyünlər, Düz bağırsaq nahiyəsində eroziya və xoralarda istifadə olunan vasitə",
    composition: `Laktoferrin – 25 mq,
    Qliserofosfoinozitol (QFİ) lizin 2% – 50 mq,
    Hialuron turşusunun natrium duzu – 20 mq ,
    Köməkçi maddələr:,
    HİDROGENləşdirilmiş KOKO-QLİSERIDLƏR 2255 m, CERA FLAVA 150 mq, PROPİLEN QLİKOL 200 mq`,
    indications: `Anal çatlar, İltihablanmış hemorroidal düyünlər, Proktit, Düz bağırsaq nahiyəsində eroziya və xoralar,
    Kəskin və xroniki prostatit, Kolpit (Vaginit), Endoservisit, Residivləşən vulvovaginal kandidozlar və
    bakterial vaginozlar, Uşaqlıq yolu və uşaqlıq boynunun iltihabı ilə müşahidə olunan eroziv zədələnmələri`,
    dosage: `Qadınlarda: Kolpit (Vaginit), Endoservisit, Residivləşən vulvovaginal kandidozlar və bakterial
    vaginozlar, uşaqlıq yolu və uşaqlıq boynunun iltihabı ilə müşahidə olunan eroziv zədələnmələri zamanı uşaqlıq yoluna
    1 şam gündə 1 dəfə, axşam yatmazdan qabaq dərinə yeridilir. Anal çatlar, iltihablanmış hemorroidal düyünlər, proktit, düz bağırsaq nahiyəsində eroziya və xoralar zamanı isə düz bağırsağa 1 şam gündə 1 dəfə, axşam yatmazdan qabaq dərinə yeridilir. Kişilərdə: Kəskin və xroniki prostatit və ya anal çatlar, iltihablanmış hemorroidal düyünlər, proktit, düz bağırsaq nahiyəsində eroziya və xoralar zamanı düz bağırsağa 1 şam gündə 1 dəfə, axşam yatmazdan qabaq dərinə yeridilir`,
    pregnancy: `Hamiləlik və laktasiya dövründə preparatın istifadəsi mümkündür.`,
    sideeffects: `Preparat orqanizm tərəfindən yaxşı qəbul olunur. Diqqət və sensomotor qabiliyyətə mənfi təsir
    göstərmir. Nadir hallarda yerli qıcıqlanma, ağrı və ya diskomfort kimi hallar ola bilər.`,
    contraindications: `Preparatın tərkibindəki hər hansı bir komponentə qarşı hiperhəssaslıq.`,
    storage: `25°C-dən yüksək olmayan temperaturda, quru, işıqdan qorunan və uşaqların əli çatmayan yerdə saxlamaq lazımdır.`,
    form: `2.7 q fitoşam blisterdə, karton qutu qablaşmada N 10`,
  },

  {
    id: "kardioqrif",
    name: "Kardioqrif",
    img: "assets/images/blog-img/kardioqrif.png",
    alt: "",
    composition: `L-karnitin 450 mq,
    Koenzim Q10 30 mq,
    Kversetin 20 mq`,
    pharmaGroup: "Hüceyrə metabolizmini gücləndirən vasitə; Kardioprotektor;",
    indications: `Ürəyin işemik xəstəliyi, ateroskleroz, hipertoniya, xroniki ürək çatışmazlığı. Hipoksik və işemik vəziyyətlərdə beyinin qidalanmasını yaxşılaşdıraraq funksiyasını və əqli fəaliyyəti təmin və bərpa etmək məqsədi ilə; intensiv fiziki yüklənmələr zamanı əzələ aktivliyini artırmaq məqsədi ilə; stresə qarşı müqaviməti artırmaq məqsədi ilə; yağların əriməsini gücləndirmək və bədənin artıq çəkisini azaltmaq məqsədi ilə; şəkərli diabet, piylənmə, tireotoksikoz; uşaqlarda və yeniyetmələrdə bədən çəkisinin defisiti və boy inkişafının ləngiməsi zamanı; ağır xəstəliklər və fiziki yüklənmələrdən sonra bərpa dövründə; dölün hipoksiyası zamanı; spermatogenezin pozulması zamanı.`,
    dosage: "1 həb gün ərzində 1-2 dəfə daxilə təyin edilir.",
    sideeffects: "Nadir hallarda allergik reaksiyalar, qusma və ürəkbulanma.",
    contraindications: "Preparatın tərkibindəki hər hansı komponentə qarşı hiperhəssaslıq.",
    storage: "Quru, işıq düşməyən və uşaqların əli çatmayan yerdə 24ºC–dən yuxarı olmayan temperaturda saxlanılmalıdır",
    form: "Kardioqrif № 30."
  },
  {
    id: "akvitimmuno",
    name: "Akvit immuno plus",
    img: "assets/images/blog-img/akvitimmuno.png",
    alt: " İmmunostimulyator",
    composition: `5 ml-də:,
    Beta Qlutan - 30mq;,
    Vitamin C - 60 mq;,
    Qara Qarağat ekst - 20 mq;,
    Propolis ekstraktı - 15mq;,
    Bifidobakterium - 800million cfu;,
    Laktobasillis - 800 million cfu;,
    Sink - 2.5 mq:`,
    pharmaGroup: "İmmunostimulyator",
    indications: `İmmunodefisit hallar, yuxarı tənəffüs yollarının virus infeksiyaları (o cümlədən qrip, paraqrip, influenza), bağırsaq infeksiyaları (o cümlədən enterovirus, rotavirus), uzunsürən infeksion xəstəliklər, bakterial infeksiyalar, uzunmüddətli antibiotikoterapiya.`,
    dosage: "4-7 yaş - 2,5 ml gündə 1 dəfə; 7-10 yaş - 5ml gündə 1 dəfə; 10 yaşdan yuxarı - 7,5 ml gündə 1 dəfə.",
    sideeffects: "",
    contraindications: "Fərdi həssaslıq, Vitamin C hipervitaminozu.",
    storage: "",
    form: "150 ml şərbət.",
    manufacturer: "Türkiyə pharmanor İlaç San."
  },
  {
    id: "betrivit",
    name: "Betrivit",
    img: "assets/images/blog-img/betrivit-large.png",
    alt: "İnyeksiya üçün məhlul",
    composition: `2 ml məhlulun tərkibi:,
    Neyrotrop B qrupu vitaminlərinin kombinasiyası,
    B1 Vitamini (Tiamin xlorid) – 100 mq,
    B6 Vitamini (Piridoksin hidroxlorid) – 100 mq,
    B12 Vitamini (Sianokobalamin) – 1 mq,
    Lidokain hidroxlorid – 20 mq`,
    pharmaGroup: `B qrupu vitaminləri sinir sistemi və dayaq-hərəkət sistemi xəstəliklərində iltihabi və degenerativ proseslərin müalicəsi üçün vacibdir. Yüksək dozalarda analgetik təsir göstərir, qan dövranını yaxşılaşdırır və sinir impulslarının ötürülməsini normallaşdırır.`,
    pharmaFeatures: `B1 Vitamini (Tiamin) sinir toxumasında karbohidrat mübadiləsini normallaşdırır, sinir impulslarının keçirilməsini dəstəkləyir və Krebs dövründə iştirak edir. B6 Vitamini (Piridoksin) zülalların, karbohidratların və yağların mübadiləsinə mühüm təsir göstərir, mərkəzi və periferik sinir sisteminin normal fəaliyyəti üçün vacibdir, sinir qişasının bir hissəsi olan sfinqosinin sintezində iştirak edir. B12 Vitamini (Sianokobalamin) hematopoez (qan yaranması), nukleotidlərin sintezi və mərkəzi sinir sistemində mühum proseslərin tənzimlənməsi üçün vacibdir. Lidokain inyeksiya yerində lokal anestetik təsir göstərir, ağrını azaldır və vitaminlərin udulmasını asanlaşdırır.`,
    indications: `Kompleks terapiyada: müxtəlif mənşəli mono- və polineyropatiyalar, dorsalgiya, pleksopatiyalar, lumboişialgiya, onurğada degenerativ dəyişikliklər nəticəsində yaranan radikulyar sindrom kimi halların müalicəsində istifadə olunur.`,
    dosage: `Şiddətli ağrı sindromu zamanı müalicəyə aşağıdakı şəkildə başlamaq tövsiyə olunur: əzələdaxili inyeksiya ilə gündəlik 1 ampul (2 ml) məhlul tətbiq edilir. İlkin mərhələdə müalicə gündə 1 dəfə, 5 gün ərzində aparılır, sonra isə həftədə 2-3 dəfə 2-3 həftə ərzində nadir tətbiqlə davam etdirilir. Davamedici müalicə: xəstəliyin klinik əlamətlərindən asılı olaraq daxilə qəbul üçün dərman.`,
    special: `Venadaxili inyeksiya qadağandır. Əzələdaxili inyeksiya dərin yeridilməlidir və inyeksiya yerində hər hansı qıcıqlanma zamanı dərhal həkimə müraciət olunmalıdır. Preparat uzun müddət (6 aydan çox) istifadəsi zamanı neyropatiyaya səbəb ola bilər.`,
    contraindications: `Preparatın komponentlərinə qarşı yüksək həssaslıq. Kəskin ürək çatışmazlığı və ya dekompensasiya mərhələsində olan xroniki ürək çatışmazlığı. 18 yaşdan aşağı uşaqlarda istifadəsi. Hamiləlik və laktasiya dövründə istifadəsi qadağandır.`,
    form: "2 ml-lik ampul şəklində, 10 ampul.",
    manufacturer: "Biofarm JSC, Gürcüstan"
  },
  {
    id: "bionefron-kapsul",
    name: "Bionefron kapsullar",
    img: "assets/images/blog-img/bionefron-kapsul.png",
    alt: "Bionefron kapsullar",
    composition: `1 kapsulda xırdalanmış dərman bitkisi xammalı vardır.,
    Təsiredici maddələr: Qızılçətir otu 18 mq, Rozmarin yarpaqları 18 mq, Levistikin kökü 18 mq.,
    Köməkçi maddələr: Laktoza monohidrat, povidon, qarğıdalı nişastası, kolloidal silisium dioksid,
    maqnezium
    stearat.`,
    description: `Möhtəviyyatı açıq qəhvəyidən qəhvəyi rəngə qədər qranullardan və tozdan ibarət kapsullardır.`,
    pharmaGroup: `Urologiyada istifadə olunan vasitələr. ATC kodu: G04BX50`,
    pharmaFeatures: `Bitki mənşəli dərman vasitəsinin tərkibinə daxil olan komponentlər kompleks aktivlik göstərir. Bu,
    iltihabəleyhinə, antioksidant, spazmolitik və ağrıkəsici təsirlərlə özünü göstərir. Həmçinin, preparatın
    bitki komponentlərində olan maddələr antibakterial və diuretik təsirlərə malikdir.`,
    indications: ` Sidikçıxarıcı yolların iltihabi xəstəliklərin kompleks müalicəsi üçün təyin edilir (uretrit, sistit,
    pielonefrit), nefrotik sindrom, arterial hipertoniya, 2-3 dərəcəli ürək-damar çatışmazlığı, böyrək
    daşlarının əmələ gəlməsinin profilaktikası, o cümlədən onların çıxarılmasından sonra.`,
    dosage: `Həkim başqacür təyin etməyibsə, preparat 12 yaşdan yuxarı uşaqlara və böyüklərə - gündə 3 dəfə 2 kapsul
    (ümumi sutkalıq doza – 6 kapsul) təyin edilir. Kapsulaları çeynəmədən, kifayət qədər maye (məsələn, bir
    stəkan su) ilə qəbul etmək lazımdır. Preparat təyin edilərkən kifayət qədər maye qəbuluna diqqət
    yetirilməlidir. Müalicə müddətini həkim individual olaraq müəyyən edir. Əgər preparat yaxşı qəbul
    edilirsə, onu uzunmüddət təyin etmək mümkündür. Uşaqlar - Preparat 12 yaşdan kiçik uşaqlara tövsiyə
    edilmir.`,
    overdose: `Preparatın doza həddinin aşılması zamanı zəhərlənmə halları məlum deyil.`,
    contraindications: `Preparatın komponentlərinə və ya çətirçiçəklilər ailəsinə (Apiaceaa) aid digər bitkilərə, məsələn,
    razyana, cirə və anetola qarşı hiperhəssaslıq. Xora xəstəliyi kəskinləşmə mərhələsində. Ürək
    çatışmazlığı
    nəticəsində yaranan ödemlər və ya böyrək funksiyasının pozulması və / və ya həkimin maye qəbulunu
    məhdudlaşdırma tövsiyəsi.`,
    treatment: `Simptomatik.`,
    sideeffects: `Mədə-bağırsaq sistemində (ürəkbulanma, qusma, ishal) pozulmalar tez-tez baş verir. Preparatın tərkibində
    olan komponentlərə qarşı yüksək həssaslıq zamanı qaşınma, dəri qızarması və övrə daxil olmaqla allergik
    reaksiyalar yarana bilər. Hər hansı bir arzuolunmaz reaksiya baş verərsə, preparatın istifadəsini
    dayandırmaq və həkimə müraciət etmək lazımdır.`,
    interactions: `Məlum deyil. Hər hansı digər dərman vasitələrilə eyni vaxtda istifadəsinə ehtiyac olduqda həkimlə məsləhətləşmək lazımdır.`,
    pregnancy: `Hamilə qadınlar üzərində müşahidə təcrübəsi döldə qüsur inkişafı riskinin və ya kapsulların
    fetal/neonatal
    toksikliyin olmadığını göstərir. Məlumdur ki, eksperimental tədqiqatlarda reproduktiv toksikliyin heç
    bir
    əlaməti aşkar edilməmişdir. Preparatın hamiləlik dövründə istifadəsi həkim məsləhətindən sonra
    mümkündür., Laktasiya: Preparatın və ya onun metabolitlərinin ana südünə keçməsi barədə məlumat olmadığı üçün körpə üçün risk
    istisna edilmir. Bu səbəbə görə bu dövrdə preparatı istifadə etmək olmaz.`,
    special: `Qızdırmanın, spazmların, sidikdə qan görünməsinin, sidik ifrazında pozulmaların və kəskin sidik
    ləngiməsi
    davam etdiyi halda dərhal həkimə müraciət etmək lazımdır. Əgər xəstənin bəzi şəkərlərə dözümsüzlüyü
    varsa,
    bu preparatı qəbul etməzdən əvvəl həkimlə məsləhətləşmək vacibdir. Preparatın tərkibində allergik
    reaksiyalara səbəb ola bilən Yellow sunset FCF (E 110) boya maddəsi var. Nəqliyyat vasitəsini və digər
    potensial təhlükəli mexanizmləri idarəetmə qabiliyyətinə təsiri: Preparat nəqliyyat idarə etmək və
    mexanizmlərlə işləmək qabiliyyətinə təsir etmir.`,
    form: "10 kapsul PVX/alüminium konturlu-yuvalı blisterdə. 3 və ya 6 blister içlik vərəqə ilə birlikdə karton qutuya qablaşdırılır.",
    storage: `25°C temperaturdan yüksək olmayan, quru, işıqdan qorunan və uşaqların əli çatmayan yerdə saxlanmalıdır.`,
    expiry: `3 il. Yararlılıq müddəti bitdikdən sonra istifadə etmək olmaz.`,
  },
  {
    id: "bionefron-oral-damci",
    name: "Bionefron oral damcı",
    img: "assets/images/blog-img/bionefron-damci.png",
    alt: "Bionefron oral damcı",
    composition: `Təsiredici maddə: 1 q (27 damcı) məhlulun tərkibində 290 mq dərman bitkisi xammalının duru ekstraktı
    (1:16),
    Qızılçətir otu - 6 mq,
    Rozmarinin yarpaqları -6 mq,
    Levistikin kökü – 6 mq,
    (ekstragent etanol 59%)`,
    description: `Sarımtıl-qəhvəyi rəngli, spesifik qoxulu və çöküntü verən bulanıq mayedir.`,
    pharmaGroup: `Urologiyada istifadə edilən vasitələr. ATCkodu: G04BX.`,
    pharmaFeatures: `Bitki mənşəli kombinəolunmuş preparatdır. Bitki mənşəli dərman vasitəsinin tərkibinə daxil olan
    komponentlər kompleks aktivlik göstərir ki, bu da diuretik, iltihab əleyhinə, antioksidant, antimikrob,
    spazmolitik və ağrıkəsici təsirlə təzahür edir.`,
    indications: `Sidikçıxarıcı yolların iltihabi xəstəliklərinin kompleks müalicəsi. Böyrək daşlarının yaranmasının profilaktikası, o cümlədən, onların xaric olunmasından sonra.`,
    dosage: `Preparat bir qədər suda həll edilərək və ya su ilə içilərək daxilə qəbul edilir. Böyüklər - gündə 3 dəfə 50 damcı təyin edilir. Məktəb yaşlı uşaqlar - gündə 3 dəfə 25 damcı qəbul edilir. Məktəbəqədər yaşlı uşaqlar (1 yaşdan yuxarı uşaqlar) - gündə 3 dəfə 15 damcı təyin edilir.`,
    overdose: `Hazırkı dövrdə doza həddinin aşılması və intoksikasiya barədə məlumat yoxdur.`,
    contraindications: `Mədənin və 12 barmaq bağırsağın xora xəstəliyi kəskinləşmə mərhələsində. Preparatın istənilən komponentinə
    qarşı yüksək həssaslıq. Alkoqolizm (o cümlədən antialkoqol müalicədən sonra). 1 yaşa qədər uşaqlar.`,
    special: `Qaraciyər xəstəlikləri, kəllə-beyin travması, baş beyin xəstəlikləri, tərkibində etanol olduğu üçün 1 yaşdan yuxarı uşaqlar (istifadəsi, yalnız həkimlə məsləhətləşdikdən sonra mümkündür). Preparatın tərkibindəki etil spirtinin miqdarı 16,0-19,5% (həcm nisbətində) təşkil edir. Nəqliyyat vasitəsini və digər potensial təhlükəli mexanizmləri idarəetmə qabiliyyətinə təsiri: Preparatla müalicə dövründə nəqliyyat vasitəsi idarə edərkən və yüksək diqqət və sürətli psixomotor reaksiya tələb edən digər potensial təhlükəli fəaliyyət növü ilə məşğul olarkən ehtiyatlı olmaq lazımdır.`,
    pregnancy: `Hamiləlikdə və laktasiya dövründə preparatın istifadəsi yalnız həkim təyinatı ilə mümkündür, əgər ana üçün gözlənilən fayda döl və uşaq üçün potensial riskdən yüksəkdirsə`,
    liverDisfunction: `Qaraciyər xəstəlikləri zamanı preparatı ehtiyatla təyin etmək lazımdır (təyinatı yalnız həkimlə məsləhətləşdikdən sonra mümkündür).`,
    childeUse: ` 1 yaşa qədər uşaqlarda preparatı istifadə etmək qadağandır. 1 yaşdan yuxarı uşaqlarda preparatı ehtiyatla təyin etmək lazımdır (təyinatı yalnız həkimlə məsləhətləşdikdən sonra mümkündür) – tərkibində olan etanola görə.`,
    interactions: `Antibakterial vasitələrlə kombinasiyası mümkündür və məqsədəuyğundur - antibakterial terapiyanın effektivliyini artırır.`,
    treatment: `Preparatın doza həddinin aşılması zamanı simptomatik müalicə təyin edilir..`,
    form: "50 və ya 100 ml məhlul flakonda. 1 flakon içlik vərəqə ilə birlikdə karton qutuya qablaşdırılır.",
    storage: `25°C temperaturdan yüksək olmayan, quru, işıqdan qorunan və uşaqların əli çatmayan yerdə saxlanmalıdır.`,
    expiry: `3 il. Yararlılıq müddəti bitdikdən sonra istifadə etmək olmaz.`,
  },
  {
    id: "imunoqrif",
    name: "Imunoqrif",
    img: "assets/images/blog-img/imunoqrif.png",
    alt: "İmmunostimulyator; Antioksidant.",
    composition: `Hər tabletdə:,
    Beta Qlükan - 150 mq,
    Vitamin E - 30 mq,
    Selen - 80 mkq,
    Sink - 25 mq`,
    pharmaGroup: "İmmunostimulyator; Antioksidant.",
    indications: `Qrip və KRVİ müalicəsi və profilaktikası, bronxit, pnevmoniya, faringit, sinusitlər, stomatit, gingivit.
    Sidik-cinsiyyət sisteminin kəskin və xroniki infeksiyalarının müalicəsi və profilaktikası: sistit,
    pielonefrit, qlomerulonefrit, prostatit, orxit, epididimit, kolpit, salpingit, salpingooforit. Virus,
    bakterial, göbələk və parazitar infeksiyaların kompleks müalicəsinin tərkibində. Müxtəlif xəstəliklər
    zamanı immun sistemin funksional zəifliyi müşahidə edilən hallarda. Onkoloji xəstəliklər zamanı
    əməliyyatönü, əməliyyat zamanı, əməliyyatdan sonra radio- və kimyaterapiya ilə müalicənin
    effektivliyinin artırılması məqsədi ilə. Xroniki yorğunluq və fiziki tükənmə zamanı. Diabetli xəstələrdə oksidativ
    stressin və immunitetin zəifləməsinin qarşısını almaq məqsədi ilə.`,
    dosage: `Profilaktik məqsədlə 1 tablet gün ərzində 1-2 dəfə, müalicə məqsədi ilə 1 tablet 2-3 dəfə təyin edilir.
    Preparatın qəbulu yeməkdən yarım saat sonra bol maye ilə tövsiyə edilir.`,
    sideeffects: "Nadir hallarda halsızlıq və dispeptik əlamətlər.",
    contraindications: "Preparatın hər hansı komponentinə qarşı həssaslıq.",
    form: "İmunoqrif № 30.",
    manufacturer: "ASPAR İLAÇ A.Ş.Beylikdüzü/İstanbul/TÜRKİYE"
  },
  {
    id: "vagifort",
    name: "Vagifort",
    img: "assets/images/blog-img/vagifort-removebg-preview.png",
    alt: "Vagifort",
    composition: `1 şamın tərkibində 100 mq klindamisin (klindamisin fosfat şəklində), 400 mq ketokonazol vardır.,
    Köməkçi maddələr: butilhidroksianizol, vitepsol H5.`,
    pharmaGroup: "Geniş spektrli antibakterial, antifunqal təsirə malik vaginal şam.",
    indications: `Gardnerella vaginalis, Mobiluncus spp tərəfindən törədilən bakterial vaginoz, Bacteroides fragilis kimi digər anaerob bakteriyaların törətdiyi vaginoz və vaginal kandidozlar. Digər antiprotozoylara qarşı
    rezistent vaginal infeksiyalar. Aerob və anaerob qarışıq vaginal infeksiyaların müalicəsində.`,
    pregnancy: `Hamiləliyin ilk 3 ayı zamanı istifadə etmək məsləhət görülmür. Hamiləliyin ikinci və üçüncü 3 ayı zamanı
    yalnız müalicə həkimi ilə məsləhətləşdikdən sonra istifadə etmək olar. Laktasiya dövründə yalnız ana üçün
    faydası uşaq üçün riskdən yüksək olduqda istifadə olunmalıdır.`,
    dosage: `Vagifort vaginal tabletlərin məsləhət görülən dozası gecə yatmazdan əvvəl yuxarı intravaginal yerdilən bir
    tabletdən ibarətdir və 3 gecə ərzində qoyulur. Vaginal tablet daxil edildikdən sonra əriyərək itir.`,
    sideeffects: `Adətən preparat yaxşı qəbul olunur. Əlavə təsirlər adətən yüngül olur: mədə sancıları, mədə ağrısı,
    qusma, vulvovaginal yanğı hissi, qaşınma, ağrı hissi, ödəm, sidik ifrazının ağrılı olması, sidik yollarının
    infeksiyası, hərarət, baş ağrısı, əzələ ağrıları, çanaq nahiyəsində ağrı və qıcolmalar, eritema və lokal
    qıcıqlanma. Nadir hallarda ciddi əlavə təsirə C. difficile ilə əlaqəli ishal, dəri və gözlərin
    saralması, tənəffüsü çətinləşdirən allergik reaksiyalar, dəridə səpgilər aiddir.`,
    contraindications: `Preparatın tərkibində olan hər hansı komponentə qarşı yüksək həssaslıq. Kron xəstəliyi, xoralı kolit, həmçinin antibakterial preparatların istifadəsi nəticəsində yaranmış kolitdən əziyyət çəkən xəstələrdə
    istifadəsi əks göstərişdir.`,
    overdose: `Həkimin təyin etdiyi dozadan artıq istifadə etmək olmaz. Doza həddinin aşılması zamanı həkimə müraciət
    etmək lazımdır. Simptomları: əlavə təsirlərin kəskinləşməsi. Müalicəsi: simptomatik aparılır.`,
    storage: `25°C-dən yüksək olmayan, quru, qaranlıq və uşaqların əli çatmayan yerdə saxlanmalıdır.`,
    form: `VAGİFORT 7 vaginal tablet, alüminium stripdə. 1 strip içlik vərəqə ilə birlikdə karton qutuya
    qablaşdırılır.`,
    expiry: "Qablaşdırmanın üzərində göstərilmişdir.",
    prescription: "Resept əsasında buraxılır.",
    manufacturer: "Vapi Care Pharma PVT. LTD. İNDİA"
  },
  {
    id: "xondrofon",
    name: "Xondrofon",
    img: "assets/images/hero-section/xondrofon.png",
    alt: "Xondroprotektor, iltihab əleyhinə ağrıkəsici vasit",
    composition: `Qlükozamin Sülfat 300 mq,
    Xondroitin Sülfat 200 mq,
    MSM (Metil Sülfonil Metan) 150 mq,
    Hialuron turşusu 5 mq,
    Collagen Tip 2 10 mq`,
    pharmaGroup: "Xondroprotektor, iltihab əleyhinə ağrıkəsici vasitə",
    indications: `Osteoartroz (birincili və ikincili, koksartroz və qonartroz və s.), revmatoid artrit, poliartrit,
    periartrit, osteoxondroz, spondilyoz, sümüklərin travmatik zədələnməsi, oynaqlarda aparılan
    əməliyyatlardan sonrakı reablitasiya zamanı, fibromialgiya, paradontopatiya, dəri, saç və dırnaq
    xəstəlikləri.`,
    dosage: "1 kapsul gündə 2-3 dəfə bol maye ilə qəbul edilir. Dozanın artırılması məsləhət görülmür.",
    sideeffects: "Nadir hallarda dispeptik narahatlıqlar, baş ağrısı, başgicəllənmə, allergik reaksiyalar.",
    contraindications: `Hamiləlik və laktasiya dövrü. Preparatın tərkibindəki komponentlərə qarşı həssaslıq. Uşaqlarda istifadəsi məsləhət görülmür.`,
    form: `XONDROFON N30 qastro-rezistent kapsul. 15 tabletdən ibarət 2 blister və məlumat vərəqi ilə birlikdə karton qutularda qablaşdırılır.`,
    manufacturer: `Commissioned by GesFreLab GmbH Germany sifarişi əsasında istehsal olunmuşdur.`
  },
  {
    id: "mildromax",
    name: "Mildromax forte",
    img: "assets/images/blog-img/mildromax.png",
    alt: "",
    composition: `1 ampulun (5 ml) tərkibi Meldonium dihidtrat - 0.5 q, Arqinin hidroxlorid – 1 q,
    Köməkçi maddələr: İnyeksiya üçün su.`,
    description: `Şəffaf, rəngsiz və ya azacıq sarımtıl mayedir.`,
    pharmaGroup: `Metabolik vasitə (Digər metaboliklər) ATC C01EB; B05XB01`,
    indications: `Ürəyin işemik xəstəliyinin kompleks müalicəsi (stenokardiya, miokard infarktı), xroniki ürək çatışmazlığı və dishormonal pozğunluqlar nəticəsində kardiomiopatiya, beyin qan dövranının kəskin və xroniki
    pozğunluqlarının kompleks terapiyası (insult və serebrovaskulyar çatışmazlıq), hemoftalm və torlu qişaya
    müxtəlif etiologiyalı qansızmalar, torlu qişanın mərkəzi venasının və onun şaxələrinin trombozu,
    müxtəlif etiologiyalı retinopatiyalar (şəkərli diabet, hipertonik), əmək qabiliyyətinin aşağa düşməsi, əqli və
    fiziki yüklənmə (o cümlədən idmançılar arasında), xroniki alkoqolizm zamanı abstinent sindromu, kişi
    sonsuzluğunda spermatogenezin stimulyasiyası.`,
    dosage: `Preparat əzələdaxili, venadaxili və parabulbar olaraq tətbiq olunur. Venadaxili damcı üsulu ilə tətbiq
    edildikdə, preparat 100-200 ml 0,9% natrium xlorid məhlulunda əvvəlcədən həll edilir. Qlükoza və ya
    digər preparatlarla qarışdırmaq tövsiyə edilmir. İlkin tətbiqetmə sürəti 10 damcı/dəq, başlanğıcdan 20 dəqiqə
    sonra sürət 30 damcı/dəq-ə qədər artır. Preparatın sutkalıq dozası 50 ml-dir. Orta müalicə kursu 5-10
    gündür. Tətbiqetmə üsulu, dozası və müalicə müddəti göstərişdən, vəziyyətin ağırlığından asılı olaraq
    fərdi müəyyən edilir.`,
    contraindications: `Preparatın istənilən komponentinə qarşı hiperhəssaslıq, kəllədaxili təzyiqin yüksəlməsi (venoz axının
    pozulması, kəllədaxili şişlər zamanı), hamiləlik, ana südü ilə qidalanma dövrü, 18 yaşa qədər
    (effektivliyi və təhlükəsizliyi müəyyən edilməmişdir).`,
    overdose: `Baş ağrısı, taxikardiya, başgicəllənmə və ümumi zəiflik ilə müşayiət olunan qan təzyiqinin düşməsi. Belə
    vəziyyətləri aradan qaldırmaq üçün preparat dayandırılır, antihistaminlərlə desensibilizasiyaedici
    müalicə aparılır və qələviləşdirici preparatlardan, saluretiklərdən və kristalloid məhlullardan istifadə olunur.`,
    pregnancy: `Hamilə qadınlarda istifadənin təhlükəsizliyi öyrənilməmişdir, buna görə də dölə mümkün mənfi təsirlərin
    qarşısını almaq üçün istifadəsi qadağandır. Preparatın südlə ifrazı və onun yeni doğulmuş körpənin
    sağlamlığına təsiri öyrənilməmişdir, buna görə də istifadə zəruri olarsa, ana südü ilə qidalanma
    dayandırılmalıdır.`,
    special: `Kardiologiya şöbələrində kəskin miokard infarktı və qeyri-stabil stenokardiyanın müalicəsində çoxillik
    təcrübə göstərir ki, Meldonium kəskin koronar sindrom zamanı birinci sıra preparatı deyil və onun
    istifadəsi kəskin vacib deyil. 2016-cı il yanvarın 1-dən meldonium Ümumdünya Antidopinq Agentliyinin
    qadağan olunmuş maddələr siyahısına daxil edilib. Xroniki qaraciyər və böyrək xəstəlikləri zamanı
    preparatın uzunmüddətli istifadəsi ehtiyatla aparılmalıdır. Stimullaşdırıcı təsirin inkişafı ehtimalına
    görə, preparatı günün birinci yarısında istifadə etmək tövsiyə olunur. Mildromax-Forte-nin uşaqlarda
    istifadəsi ilə bağlı kifayət qədər məlumat yoxdur.`,
    driving: `Preparatın psixomotor reaksiyaların sürətinə arzuolunmayan təsirləri haqqında məlumat yoxdur.`,
    storage: `İşıqdan qorunan və uşaqların əli çatmayan yerdə 25ºC-dən çox olmayan temperaturda saxlayın. Dondurmayın!`,
    form: `İnyeksiya üçün məhlul: 5 ml məhlul ampulda; 5 ampul PVX örtüklü yuvalı qablaşdırmada; 1 və ya 2 yuvalı
    qablaşdırma içlik vərəqə ilə birlikdə karton qutuya qablaşdırılır.`,
    expiry: `2 il. Preparat qablaşdırmada göstərilən son istifadə tarixindən sonra istifadə edilməməlidir. Reseptlə
    buraxılır.`,
    manufacturer: `Türkiyə, ASPAR İlaç`
  },
  {
    id: "bronxofon",
    name: "Bronxofon",
    img: "assets/images/blog-img/bronxofon-2.png",
    alt: "",
    composition: `Biyan kökü 250 mq,
    Gülxətimi 100 mq,
    Reyhan 50 mq,
    Qalanqa 30 mq,
    Kurkuma 30 mq,
    Heyva yarpağı 30 mq,
    Bağayarpagı 10 mq`,
    indications: `Kəskin və xroniki bronxit, obstruktiv bronxit, bronxial astma, bronxoektaziya, pnevmoniya,
    larinqotraxeit, bronx-ağciyər əməliyyatlarından sonrakı ağırlaşmaların müalicə və profilaktikası.`,
    dosage: `Böyüklər: 10 ml gündə 2-3 dəfə, uşaqlar 10 ml gündə 1-2 dəfə.`,
    form: `150ml-lik şüşədə, sirop şəklində və karton qutuda.`
  },
  {
    id: "qrifovit-d3",
    name: "Qrifovit D3",
    img: "assets/images/hero-section/qrifovitd3-large-1.png",
    alt: "",
    composition: `Hər 1 damcıda: Vitamin D3 100 BV (2.5 mkq),
    15 ml flakonda: Vitamin D3 50.000 BV (1250 mkq),
    Köməkçi maddələr: Zeytun yağı və tokoferollar.`,
    indications: `Raxitin müalicə və profilaktikası. Yüksək riskli qruplarda profilaktik məqsədlə (malabsorbsiya sindromu,
    nazik bağırsağın xroniki xəstəlikləri, qaraciyərin billiar sirrozu, mədə və nazik bağırsağın
    rezeksiyası). Osteoporozun saxlayıcı terapiyası. Osteomalyasiyanın müalicəsi (45 yaşdan sonra mineral mübadilə
    pozulması; travmadan sonra üzün müddətli immobilizasiya). Hipoparatireoz və psevdohipoparatireozun
    müalicəsi. Metabolik sindrom, insulinə qarşı davamlılıq. Hamilələrdə vitamin D defisitin profilaktikası.
    Qadın sonsuzluğunun kompleks müalicəsi (yumurtalığın polikistozu, endometrioz, xroniki salpinqooforit,
    autoimmun ooforit).`,
    dosage: `Raxitin müalicəsi: 25-30 damcı (2500-3000 BV).,
    Raxitin profilaktikası: 4 damcı/sut (400 BV).,
    Malabsorbsiya sindromunda: 3000-5000 BV/sut.,
    Osteoporozda saxlayıcı terapiya: 12-30 damcı/sut (1200-3000 BV).,
    Osteomalyasiyada müalicə sxemi: 12-50 damcı/sut (1200-5000 BV).,
    Hipoparatireoz və psevdohipoparatireozun müalicəsində: 1 flakon/sut /həftədə. Kurs müddəti 4-6
    həftə.,
    Hamiləlik zamanı vitamin D defisitin profilaktikasında: 5 damcı/sut.,
    Qadın sonsuzluğunun kompleks müalicəsində: 1 flakon/sut /həftədə. Kurs müalicə 8 həftədir.`
  },
  {
    id: "prostoqrin",
    name: "Prostoqrin",
    img: "assets/images/blog-img/prostoqrin.png",
    alt: "",
    composition: `Balqabaq tumu yağı - 250 mq,
    Cırtdan palması - 100 mq,
    Arı Polenİ - 100 mq,
    L Arginin - 100 mq,
    Vitamin E - 50 mq,
    Sink - 25 mq,
    Selen - 30 mq,
    Balqabaq toxumunun tozu - 100 mq`,
    pharmaGroup: "Prostatoprotektor, antioksidant, immunostimulyator.",
    indications: `Xroniki prostatit. Prostat vəzinin xoşxassəli hiperplaziyası – adenoma (I və II mərhələ).
    Spermatogenezin zəifləməsi. Azospermiya, sonsuzluq. Kişilərdə potensiyanın artırılması məqsədi ilə. Fiziki gərgin,
    düzümlülüyün, aktivliyin və immunitetin gücləndirilməsi məqsədi ilə. İnfeksion xəstəliklərin müalicəsi və
    reabilitasiyası məqsədi ilə.`,
    dosage: "Daxilə, yeməkdən sonra. Bir kapsuldan sutkada 1-2 dəfə.",
    sideeffects: "Nadir hallarda allergik reaksiyalar, qusma və ürəkbulanma.",
    contraindications: "Preparatın tərkibindəki hər hansı komponentə qarşı hipersensasiya.",
    overdose: `Simptomları yan təsirlərin kəskinləşməsi. Müalicəsi: mədənin yumaq, aktivləşdirilmiş kömür qəbul etmək,
    simptomatik müalicə aparmaq.`,
    form: `PROSTOQRİN №30 kapsul 15 kapsul ibarət 2 blistər və məlumat vərəqi ilə birlikdə karton qutularda
    qablaşdırılır.`
  },
  {
    id: "qrifovit-kids",
    name: "Qrifovit kids",
    img: "assets/images/blog-img/qrifovit-kids.png",
    alt: "",
    composition: `L-lizin 10 mq,
    Vitamin B7 50 mkq,
    Vitamin A 200mq,
    Vitamin B12 4mkq,
    Vitamin C 100mq,
    Fol turşusu 130mkq,
    Vitamin E 10 mq,
    Yod 50mkq,
    Vitamin B1 2mq,
    Selen 10mkq,
    Vitamin B2 3mq,
    Sink 5mq,
    Vitamin B3 10mq,
    Dəmir 10mq`,
    pharmaGroup: "Balanslaşdırılmış vitamin, mineral və mikroelement kompleksi",
    indications: `Vitamin, mineral və mikroelement defisitinin müalicəsi və profilaktikası, eyni zamanda vitamin, mineral
    və mikroelementlərə tələbatın artdığı hallar. İmmun sistemin zəifləməsi; kütləvi virus və bakteriyal
    infeksiyaların yayılması zamanı, profilaktika üçün. Orqanizmin istənilən infeksion və qeyri-infeksion
    xəstəliklərə qarşı müqavimətinin gücləndirilməsi məqsədi ilə. Cərrahi, somatik və infeksion
    xəstəliklərin reabilitasiyası zamanı. Göz xəstəlikləri. Xroniki yorğunluq sindromu. Stress, asteniya və nevrotik
    vəziyyətlərin profilaktikası. Müxtəlif etiologiyalı dermatit və dermatozlar. İdmanla məşğul olan
    uşaqlarda artıq fiziki yüklənmə zamanı. Uşaqlarda artıq zehni yüklənmə zamanı.`,
    dosage: `Gündə 1 dəfə yeməkdən sonra: 1.5-5 yaş 5ml gündə 1 dəfə; 6-10 yaş 7.5 ml gündə 1 dəfə; 11-14 yaş 10ml
    gündə 1 dəfə.`,
    overdose: "Anoreksiya, ürəkbulanma, qusma.",
    sideeffects: `Düzgün dozalanma aparıldıqda praktiki olaraq əlavə təsirlər müşahidə olunmur. Nadir hallarda dispeptik
    əlamətlər.`,
    contraindications: "Tərkibindəki hər hansı komponentə qarşı hiperhəssaslıq.",
    storage: `Quru, işıq düşməyən və uşaqların əli çatmayan yerdə, 26ºC–dən yuxarı olmayan temperaturda saxlanılmalıdır.`,
    form: `150 ml-lik flakonlada, içlik vərəqi və ölçü qaşığı ilə birgə istehsal edilir.`,
    manufacturer: `Türkiyə. Aspar ilaç san.`
  },
  {
    id: "qrifovit",
    name: "Qrifovit",
    img: "assets/images/blog-img/qrifovit.png",
    alt: "",
    composition: `Vitaminlər:,
    Vitamin A 600 mkq,
    Vitamin C 120 mq,
    Vitamin D 10 mkq,
    Vitamin E 20 mq,
    Vitamin B1 5 mq,
    Vitamin B2 4 mq,
    Vitamin B6 6 mq,
    Vitamin B12 20 mkq,
    Vitamin K 50 mkq,
    Nikotin turşusu 20 mq,
    ,
    Makro və mikroelementlər:,
    Kalsium Ca 120 mq,
    Dəmir Fe 25 mq,
    Maqnezium Mg 100 mq,
    Sink Zn 25 mq,
    Yod J 150 mkq,
    Kalium K 40 mq,
    Molibden Mo 90 mkq,
    Mis Cu 2 mq,
    Selen Se 100 mkq`,
    indications: `Vitamin, mineral, makro və mikroelement defisitinin müalicəsi və profilaktikası, eyni zamanda vitamin,
    mineral, makro- və mikroelementlərə tələbatın yüksəldiyi hallar.,
    Hamiləlik zamanı və südvermə dövründə yaranan avitaminoz və hipovitaminozların müalicə və
    profilaktikası.
    Həmçinin, hamiləliyə hazırlıq dövrü.,
    Cinsiyyət sisteminin funksiyasının zəifləməsi, sonsuzluq.,
    İmmun sistemin zəifləməsi, cərrahi, somatik və infeksion xəstəliklərin reabilitasiyası zamanı.,
    Göz xəstəlikləri.,
    Ürək-damar sistemi xəstəlikləri. Ateroskleroz.,
    Xroniki yorğunluq sindromu. Stress, asteniya və nevrotik vəziyyətlərin profilaktikası.,
    Müxtəlif etiologiyalı dermatit və dermatozlar.,
    Onkoloji xəstəliklərin şüa və kimyəvi terapiyası zamanı aktiv profilaktika tədbirlərinin aparılması
    məqsədi ilə.,
    Oynaq və digər dayaq-hərəkət sistemi xəstəlikləri.,
    Vaxtından əvvəl qocalmanın qarşısını almaq məqsədi ilə.,
    İdmançılarda artıq fiziki yüklənmə zamanı.`,
    dosage: "Gün ərzində bir tablet, səhər yeməyi vaxtı bol maye ilə qəbul edilir.",
    sideeffects: `Düzgün dozalanma aparıldıqda praktiki olaraq əlavə təsirlər müşahidə olunmur. Nadir hallarda dispeptik
    əlamətlər.`,
    contraindications: "Tərkibindəki hər hansı komponentə qarşı hiperhəssaslıq. 8 yaşa qədər uşaqlar.",
    manufacturer: "ASPAR İLAÇ A.Ş.Beylikdüzü/İstanbul/TÜRKİYE",
    form: "Qrifovit 30 tablet."
  },
  {
    id: "rekarn",
    name: "Rekarn",
    img: "assets/images/blog-img/rekarn.png",
    alt: "",
    composition: "L-karnitin (L-carnitin) - 500 mq",
    pharmaGroup: "Toxumalarda metabolizmi və enerji təchizatını yaxşılaşdıran vasitə.",
    indications: `Kəskin hipoksiyalar zamanı (insult, kəllə-beyin travması zamanı). İdmançılar (intensiv və uzun sürən
    fiziki yüklənmə zamanı dözümlülüyü artırmaq üçün). Kardioloji xəstələr (fiziki yüklənməyə tolerantlığı
    artırmaq üçün). Sinir mənşəli anoreksiya zamanı (əzələ kütləsini artırmaq üçün). Yaşlı insanlara (baş
    beynin qocalmasını ləngitmək üçün). Məktəblilər və tələbələr (psixoloji yüklənmə zamanı, diqqət və
    yaddaşı yaxşılaşdırmaq üçün). Vaxtından əvvəl doğulan uşaqlar. Yenidoğulmuşlarda (hipoksik vəziyyətlərdə, bədən
    kütləsinin tənzimlənməsi üçün). Yeniyetmələrdə (skelet əzələlərinin inkişafını və bədən kütləsini
    tənzimləmək üçün). Ağır xəstəliklərdən və ya cərrahi əməliyyatlardan sonra reabilitasiya dövründə.`,
    dosage: "4-14 yaş arası 15 damcı gündə 1 dəfə, 14 yaşdan yuxarı uşaqlar və böyüklər 15 damcı gündə 2 dəfə.",
    sideeffects: "Allergik reaksiyalar, dispeptik əlamətlər.",
    contraindications: "Tərkibindəki hər hansı komponentə qarşı yüksək həssaslıq.",
    manufacturer: "Türkiyə Bereket ilaç",
    form: "50 ml şüşə flakonda, daxilə qəbul üçün məhlul-damcı, karton qutu qablaşmada."
  },
  {
    id: "korvirsir",
    name: "KORVİRSİR",
    img: "assets/images/blog-img/korvirsir-large.png",
    alt: "",
    composition: `Qırmızı exiaseya - 200 mq,
    Beta Qlukan - 150 mq,
    Vitamin E - 50 mq,
    Selen - 97 mkq,
    Sink – 9.2 mq,
    Vitamin C - 120 mq,
    Beta Karotin - 7.5 mq`,
    pharmaGroup: "İmmunostimulyator vasitə",
    indications: `Qrip və KRVİ müalicəsi və profilaktikası: bronxit, pnevmoniya, faringit, sinusitlər, stomatit,
    gingivit.,
    Virus infeksiyalarının kompleks müalicəsi zamanı,
    Bakteriyal, göbələk və parazitar infeksiyaların kompleks müalicəsi zamanı,
    Müxtəlif xəstəliklər zamanı immun sistemin funksional zəifliyi müşaiət edən hallarda,
    Sidik–cinsiyyət sisteminin kəskin və xroniki infeksiyalarının müalicəsi və profilaktikası: uretrit,
    sistit, pielonefrit.,
    Onkoloji xəstəliklər zamanı əməliyyat önü və əməliyyatdan sonra radio və kimya terapiya müalicəsinin
    effektivliyinin artırılması məqsədi ilə,
    Xroniki yorğunluq və fiziki tükənmə zamanı,
    Diabetli xəstələrdə əlavə infeksiyası və immunitet zəifləməsinin qarşısını almaq məqsədi ilə.`,
    dosage: "(İstifadə qaydası əlavə edilməyib, əlavə etmək lazımdırsa məlumat verin.)",
    sideeffects: "Düzgün dozalanma zamanı bir əlavə təsir qeydə alınmamışdır.",
    contraindications: "Preparatın komponentlərinə qarşı yüksək həssaslıq.",
    form: "N30 blisterdə kütləsi qutu qablaşdırmada"
  },
  {
    id: "krimaton",
    name: "KRİMATON GEL",
    img: "assets/images/blog-img/krimaton.png",
    stock: "Stokda yoxdur",
    composition: `
    Qlükozamin HCl,
    Xondroitin sulfat,
    Hidrolizə olunmuş kollagen,
    Tibbi xəndəkotu,
    Bataqlıq gördəvəri,
    Ardıc,
    Allontoin,
    Metilsalisilat,
    Evkalipt,
    Ardıc Efir yağları
    `,
    pharmaGroup: "İltihab əleyhinə, ağrıkəsici və xondroprotektor vasitə. Bərpasını sürətləndirir.",
    indications: `Osteoartroz (birincili və ikincili, koksartroz, qonartroz və s.),
    Artritlər. Revmatoid artrit. Poliartrit. Periartrit.,
    Osteoxondroz,
    Spondilyoz,
    Revmatik ağrılar,
    Burxulma və dartılmalar,
    Nevralgiya, lyumbaqo, işias,
    Miozit, fibromialgiya,
    Əzələ, oynaq və oynaqətrafı yumşaq toxumaların travmaları,
    Oynaqlarda aparılan əməliyyatlardan sonrakı reabilitasiya zamanı`,
    dosage: "Gün ərzində 2-4 dəfə travma və ya xəstəlik müəyyən edilən nahiyələrə sürtülür.",
    sideeffects: "Nadir hallarda allergik reaksiyalar.",
    contraindications: "Preparatın tərkibindəki komponentlərə qarşı həssaslıq.",
    special: "Preparatın tərkibindəki komponentlərin hər hansı birinə qarşı allergik reaksiya olduqda həkimlə məsləhətləşmək lazımdır.",
    overdose: "Doza həddinin aşılması müşahidə olunmur və qeydə alınmayıb."
  },
  {
    id: "rasafem",
    name: "RASAFEM",
    img: "assets/images/blog-img/rasafem.png",
    stock: "",
    composition: `
    Dəmir qlükonat - 235 mq,
    Vitamin C - 65 mq,
    Fol turşusu - 300 mkq,
    Vitamin B12 - 3 mkq,
    `,
    pharmaGroup: "Antianemik preparat",
    pharmaFeatures: `Dəmir qlükonat orqanizmdə hemoqlobinin əsas tərkib komponenti olan dəmirin defisitini aradan qaldırır.
    Dəmir çatışmazlığı anemiyaya, bununla da yorğunluq kimi simptomlara səbəb ola bilər;
    Fol turşusu qanyaradıcı orqanlarda toplanaraq qanyaranma proseslərini stimula edir. Eyni zamanda, fol
    turşusu qaraciyərdə xolinin sintezini artırır və piy infiltrasiyasını məhdudlaşdırır, immun sistemi
    gücləndirir, ağ qan hüceyrələrinin yaranmasını və funksionallığını artırır. Fol turşusu hamiləlik zamanı
    embrionun sinir hüceyrələrinin bölünməsində və formalaşmasında vacib rola malikdir;
    Vitamin B12 eritropoezda vacib rola malik purin və pirimidin əsaslarının, nuklein turşularının
    sintezində
    iştirak edir, eritrositlərdə sulfhidril birləşmələrin aktiv olaraq toplanmasını təmin edir. Həmçinin,
    vitamin B12 transmettilləşmə proseslərində iştirak edir, metionin sintezini aktivləşdirir. Zülalların
    sintezi və orqanizmdə toplanmasını artırmaqda da xüsusi təsir göstərir;
    Vitamin C metabolik təsirə malikdir. Orqanizmdə sintez olunmur, yalnız kənardan qida vasitəsilə qəbul
    olunur, oksidləşmə-reduksiya proseslərində, karbohidrat mübadiləsində, toxumaların regenerasiyasında
    iştirak edir, orqanizmin infeksiyalara qarşı müqavimətini artırır, damar keçiriciliyini azaldır. Dəmir,
    fol turşusu, histamin, lipid, zülal, karnitin sintezi, immun reaksiyalarda iştirak edir. Güclü
    antioksidant və antiqaerənt təsirə malikdir.`,
    indications: `Dəmir defisitli anemiya.,
    Hamiləlik və laktasiya dövrü. Eyni zamanda müşahidə olunan dəmir və fol turşusu defisitinin
    profilaktikası.,
    Vitamin B12 defisiti. Eyni zamanda müşahidə olunan dəmir və vitamin B12 defisitinin profilaktikası.,
    Hamiləlik (II və III trimestrdə), doğuşdan sonra və laktasiya dövründə müşahidə olunan dəmir defisitinin
    və qanyaranmanın pozulmasının profilaktikası və müalicəsi məqsədilə istifadə olunur.`,
    pregnancy: "Hamiləlik (II və III trimestrdə) və laktasiya dövründə preparatın qəbulu mümkündür.",
    dosage: "Böyüklərdə gündə 1 dəfə 1 tablet daxilə, yeməkdən 1 saat əvvəl və ya 2 saat sonra qəbul olunur.",
    contraindications: `Tərkibdəki komponentlərə həssaslıq.,
    <b>Ağır anemiya:</b> hemolitik hallar və hemosideroz, hemosiderin anemiyası, hemoqlobinopatiya.`,
    manufacturer: "Türkiyə. Pharmanor İlaç san.",
    form: "Tablet №30, karton qutularda qablaşdırılır."
  }
];

// Render function
function renderProducts(products) {
  const container = document.getElementById("dynamic-products");
  if (!container) return;
  // Map product field keys to display labels
  const fieldLabels = {
    composition: "TƏRKİBİ",
    description: "Təsviri",
    pharmaGroup: "FARMAKOLOJI QRUPU",
    pharmaFeatures: "FARMAKOLOJİ XÜSUSİYYƏTLƏRİ",
    indications: "İSTİFADƏ SAHƏSİ VƏ ƏSAS GÖSTƏRİŞLƏR",
    contraindications: "ƏKS GÖSTƏRİŞLƏRİ",
    treatment: "Müalicə",
    sideeffects: "ƏLAVƏ TƏSİRLƏRİ",
    dosage: "Qəbul qaydası və dozalanması",
    overdose: "Doza həddinin aşılması",
    interactions: "Digər dərman vasitələri ilə qarşılıqlı təsiri",
    special: "Xüsusi göstərişlər və ehtiyat tədbirləri",
    storage: "Saxlanma şəraiti",
    expiry: "Yararlılıq müddəti",
    form: "Buraxılış forması",
    pregnancy: "HAMİLƏLİK VƏ LAKTASİYA DÖVRÜNDƏ İSTİFADƏSİ",
    liverDisfunction: "Qaraciyər funksiyasının pozulması zamanı İSTİFADƏSİ",
    childeUse: "Uşaqlarda istifadəsi",
    prescription: "Aptekdən buraxılma şərti",
    manufacturer: "İstehsalçı"
  };

  container.innerHTML = products
    .map((product) => {
      // Build the content HTML by iterating over the fieldLabels mapping
      const contentHtml = Object.entries(fieldLabels)
        .map(([key, label]) =>
          product[key] ? `<h3>${label}</h3><p>${product[key]}</p>` : ""
        )
        .join("");
      return `<div id="${product.id}">
      <h2>${product.name}</h2>
      <div class="blog-card">
        <div class="blog-img">
          <a href="#" class="blog-img-item">
            <figcaption>&nbsp;${product.stock ? product.stock : ""}</figcaption>
            <img src="${product.img}" alt="${product.alt}" />
          </a>
        </div>
        <div class="blog-content">
          ${contentHtml}
        </div>
      </div>
      <div class="scroll-line"></div>
    </div>`;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  // Render on DOMContentLoaded
  renderProducts(products)

  // BLOG SLIDER AND SEARCH
  function initBlogSlider() {
    const blogContainers = Array.from(document.querySelectorAll("#dynamic-products > div"));
    const paginationList = document.getElementById("blog-pagination-list");
    const prevBtn = document.getElementById("blog-prev");
    const nextBtn = document.getElementById("blog-next");
    const searchInput = document.getElementById("blog-search");
    let currentIndex = 0;
    let filteredIndexes = blogContainers.map((_, i) => i);

    function buildPagination(filter = "") {
      paginationList.innerHTML = "";
      filteredIndexes = [];
      blogContainers.forEach((container, idx) => {
        const title = container.querySelector("h2")?.textContent || `#${idx + 1}`;
        if (title.toLowerCase().includes(filter.toLowerCase())) {
          const btn = document.createElement("button");
          btn.className = "blog-page-btn";
          btn.textContent = title;
          btn.setAttribute("data-idx", idx);
          btn.addEventListener("click", () => scrollToBlog(idx));
          paginationList.appendChild(btn);
          filteredIndexes.push(idx);
        }
      });
      if (filter && filteredIndexes.length && !filteredIndexes.includes(currentIndex)) {
        scrollToBlog(filteredIndexes[0]);
      }
      setActive(currentIndex);
    }

    function scrollToBlog(idx) {
      if (!blogContainers[idx]) return;
      blogContainers[idx].scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(idx);
    }

    function setActive(idx) {
      currentIndex = idx;
      document.querySelectorAll(".blog-page-btn").forEach((b) => {
        const btnIdx = parseInt(b.getAttribute("data-idx"));
        b.classList.toggle("active", btnIdx === idx);
      });
    }

    prevBtn?.addEventListener("click", () => {
      const pos = filteredIndexes.indexOf(currentIndex);
      if (pos > 0) scrollToBlog(filteredIndexes[pos - 1]);
    });

    nextBtn?.addEventListener("click", () => {
      const pos = filteredIndexes.indexOf(currentIndex);
      if (pos < filteredIndexes.length - 1) scrollToBlog(filteredIndexes[pos + 1]);
    });

    window.addEventListener("scroll", () => {
      let found = false;
      blogContainers.forEach((container, idx) => {
        const rect = container.getBoundingClientRect();
        if (!found && rect.top < window.innerHeight / 2 && rect.bottom > 100) {
          setActive(idx);
          found = true;
        }
      });
    });

    searchInput?.addEventListener("input", function () {
      buildPagination(this.value);
    });

    buildPagination();
    setActive(0);
  }

  initBlogSlider();
});