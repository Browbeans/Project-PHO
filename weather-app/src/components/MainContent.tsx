import { ReactComponent } from '*.svg';
import React, { CSSProperties } from 'react'; 
import { Link, Route, Switch } from 'react-router-dom';
import BarItem from './BarItem';
import BarNavigation from './BarNavigation';
import ContentItem from './ContentItem';
import ErrorBoundary from './ErrorBoundary';

interface Props{
    
}
  
  const MainContent: React.FC<Props> = ()  => {
    const data = [
      {area: 'Avenyn'}, 
      {area: 'Järntorget'},
      {area: 'Hisingen'}
    ]

    const avenyn = [ {
      title: 'Yaki-da', 
      image: '',
      info: 'Yaki-Da har många ansikten och skepnader. Här finns en terrass, två dansgolv och en prisbelönt kaffebar, utspritt över flera våningar. Högst upp ligger den ekologiska och KRAV-märkta bistron belägen bland takåsarna.',
      lat: 57.7014,
      lng: 11.9727
    },
    {
      title: 'Lounge', 
      image: '',
      info: 'Med flera år på nacken är Lounge(s) en av Avenyns mest etablerade nattklubbar. På flera våningar finns allt som behövs för en lyckad utekväll som barer, dansgolv, roulette och en populär takterass.',
      lat: 57.70129441738012, 
      lng:  11.973301271200713 
    },
    {
      title: 'Valand', 
      image: '',
      info: 'Valands nattklubb är sin egen värld, vackert inramad av storslagna konstverk, glittrande kristallkronor och – party! På våningsplanet finns en ambitiös restaurangdel, flertalet barer, dansgolv och scener. Nöjesupplevelsen börjar med afterwork och fortsätter till sena natten.',
      lat: 57.700557877234374, 
      lng: 11.974233430574191
    },
    {
      title: 'Hardrock-cafe', 
      image: '',
      info: 'Vår restaurang är fyra våningar med matservering, 5 barer, nattklubb och shuffleboard. Här hittar du alltid något att göra! Vi har även flera eventytor som lämpar sig för allt från mindre grupper till större företagsevent. Sommartid har vi vår populära uteservering med 120 sittplatser på första parkett mot ett vimlande Avenyn. Tyvärr tillåter vi inte pälsdjur varken på uteserveringen eller inne i restaurangen. Tack för er förståelse.',
      lat: 57.70135609387745,
      lng: 11.97411020333064
    },
  ]
    const jarntorget = [ {
      title: 'Soho', 
      image: '',
      info: 'På SoHO Beer House erbjuder dem mat som . Ifall det är något som är frestande föreslår vi att ni gör en bokning på den här restaurangen och provar. Restaurangen erbjuder inte online-bordsbeställning. Vi föreslår att ni skickar ett e-post eller ringer för bordsbokning.',
      lat: 57.699507428004324, 
      lng: 11.951107663737236
    },
    {
      title: 'Cafe-publik', 
      image: '',
      info: 'Kafé och bar på Göteborgs alternativa nattlivsstråk, Andra Långgatan. Med fokus på öl och gott kaffe, samt en enklare barmeny är Café Publik ett populärt vattenhål för stadens unga. Café Publik togs under 2010 över i ny regi, men har behållit sitt fokus på olika DJ:s nästan varje kväll, trevlig personal och god stämning. Lokalen i en och en halv våning, kompletteras med en liten uteservering på gatan.',
      lat: 57.699016392497676, 
      lng: 11.947613647816882
    },
    {
      title: 'Brygghuset', 
      image: '',
      info: 'Hans får en ide, han måste givetvis föra sitt arv vidare, det vill säga brygga öl! Han kommer över en nedgången lokal vid järntorget som han renoverar upp tillsammans med Kristina och startar så småningom Göteborgs första bryggeri. De döper bryggeriet till Jerntorgets Brygghus!',
      lat: 57.69960467377492, 
      lng: 11.951972174099703
    },
    {
      title: 'Hops', 
      image: '',
      info: 'Längst ner på Andra Långgatan i hjärtat av Masthuggstorget hittar du ölsorter från världens alla olika hörn. Vårt ölsortiment är väldigt brett och expanderas kontinuerligt. För att uppnå så stor variation som möjligt så försöker vi ta in en så stor variation av öl som möjligt. Allt från olika mikrobryggerier till förslag från gäster, som gör att just din favoritsort eventuellt kan hamna i våra kylar. Nyheter av öl presenteras kontinuerligt på Facebook och Instagram.',
      lat: 57.69862268402612, 
      lng: 11.943602925966266
    },
  ]
    const hisingen = [ {
      title: 'Ölstugan', 
      image: '',
      info: 'På Ölstugan 1892 Tullen Hisingen kan ni bland annat äta Pub, Gastropub. Om ni är sugen på detta föreslår vi dig att boka ett bord och kolla på menyn. Tyvärr är det inte möjligt att boka ett bord online. Nå dem på e-post eller telefon för bordsbokning. Ni kan ringa på +4631165616.',
      lat: 57.69964,
      lng: 11.95104
    },
    {
      title: 'Kville-biljard', 
      image: '',
      info: 'Kville Biljard har funnits på Kvilletorget sedan 1994 och erbjuder en unik, lugn, trygg och gemytlig atmosfär med trevlig personal och personlig service. Här samlas vi för att spela biljard, ta ett parti dart, utmana vännerna i en trekamp för att umgås, koppla av i någon av våra barer och äta en god bit mat. Vi har även livespelningar, DJ:s och dansgolv, casino, shuffleboard, Pub Quiz samt företagsevent.',
      lat: 57.719943074972896, 
      lng: 11.949461898457022
    },
    {
      title: 'Antibarbarus', 
      image: '',
      info: 'ANTIBARBARUS Hajpade kaffebaren Alkemisten har ett syskon, även detta ställe med placering i Kvillebäcken. Krogen fokuserar på hantverk och hållbarhet, med en street food-baserad meny. Även om restaurangen erbjuder matinfluenser från hela världen, hämtar köket sina råvaror från producenter med lokal förankring. Med en varierande meny får stället stor variation, både vad gäller mat och dryck. Främst är det naturviner som gäller, samt öl från mikrobryggerierna.',
      lat: 57.72132786155146, 
      lng: 11.94487981636305
    },
    {
      title: 'Lindholmen-Market', 
      image: '../assets/{Lindholmen-streetfood.jpg}',
      info: 'Gatumat, och det är ganska exakt vad det är! Enkelt & gott, opretentiöst men med krav på kvalité och viljan att vara gatusmart kombinerad med en inbjudande attityd! Det som binder oss samman är kärleken till maten, kvalitén i råvarorna och människorna som äter den! Bärs i mängder',
      lat: 57.708675696526086, 
      lng: 11.945752897853069
    },
  ]

    return (
      <div style={rootStyle}>
        <Switch>
          <Route exact path="/">
            {data.map((value) => (
              <ContentItem title={value.area} key={value.area} />
            ))}
          </Route>

          <Route path="/järntorget">
              {jarntorget.map((value) => (
                <BarNavigation id={value.title} key={value.title} />
              ))}   
          </Route>
          <Route path="/hisingen">
            {hisingen.map((value) => (
              <BarNavigation id={value.title} key={value.title} />
            ))}
          </Route>
          <Route path="/avenyn">
            {avenyn.map((value) => (
              <BarNavigation id={value.title} key={value.title} />
            ))}
          </Route>

          {avenyn.map((value) => (
            <Route path={"/" + value.title}>
              <BarItem bar={value} id={value.image} />
            </Route>
          ))}

          {jarntorget.map((value) => (
            <Route path={"/" + value.title}>
              <BarItem bar={value} id={value.image} />
            </Route>
          ))}

          {hisingen.map((value) => (
            <Route path={"/" + value.title}>
              <BarItem bar={value} id={value.image} />
            </Route>
          ))}
        </Switch>
      </div>
    );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  minHeight: '90vh',
  justifyContent: "space-around",
  alignItems: "center",
};


export default MainContent; 