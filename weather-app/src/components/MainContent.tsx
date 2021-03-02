import { ReactComponent } from '*.svg';
import React, { CSSProperties } from 'react'; 
import { Link, Route, Switch } from 'react-router-dom';
import BarItem from './BarItem';
import BarNavigation from './BarNavigation';
import ContentItem from './ContentItem';

// const imageAvenyn =
//   "https://www.avenyn.se/wp-content/uploads/2016/11/avenyvandring700x350.jpg";

//   const imageHisingen =
//     "https://cached-images.bonnier.news/swift/bilder/epi-30-dn/UploadedImages/2016/3/29/283a28b8-4979-4d3b-9ebc-3b515b01299f/bigOriginal.jpg";

// const imageJarntorget =
//   "https://www.gp.se/image/policy:1.23707940:1581244196/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a";

  interface Props{
    
  }
  
  const MainContent: React.FC<Props> = ()  => {
  
  
    // const jarntorget = ['Soho', 'Cafe-publik', 'Brygghuset', 'Hops']
    // const hisingen = ['Ölstugan', 'Kville-Biljard', 'Antibarbarus', 'Lindholmen-Streetfood']

    const data = [
      {area: 'Avenyn'}, 
      {area: 'Järntorget'},
      {area: 'Hisingen'}
    ]


    const avenyn = [ {
      title: 'Yaki-da', 
      image: '',
      info: 'Yaki-Da har många ansikten och skepnader. Här finns en terrass, två dansgolv och en prisbelönt kaffebar, utspritt över flera våningar. Högst upp ligger den ekologiska och KRAV-märkta bistron belägen bland takåsarna.'
    },
    {
      title: 'Lounge', 
      image: '',
      info: 'Med flera år på nacken är Lounge(s) en av Avenyns mest etablerade nattklubbar. På flera våningar finns allt som behövs för en lyckad utekväll som barer, dansgolv, roulette och en populär takterass.'
    },
    {
      title: 'Valand', 
      image: '',
      info: 'Valands nattklubb är sin egen värld, vackert inramad av storslagna konstverk, glittrande kristallkronor och – party! På våningsplanet finns en ambitiös restaurangdel, flertalet barer, dansgolv och scener. Nöjesupplevelsen börjar med afterwork och fortsätter till sena natten.'
    },
    {
      title: 'Hardrock-cafe', 
      image: '',
      info: 'Vår restaurang är fyra våningar med matservering, 5 barer, nattklubb och shuffleboard. Här hittar du alltid något att göra! Vi har även flera eventytor som lämpar sig för allt från mindre grupper till större företagsevent. Sommartid har vi vår populära uteservering med 120 sittplatser på första parkett mot ett vimlande Avenyn. Tyvärr tillåter vi inte pälsdjur varken på uteserveringen eller inne i restaurangen. Tack för er förståelse. '
    },
  ]
    const jarntorget = [ {
      title: 'Soho', 
      image: '',
      info: 'På SoHO Beer House erbjuder dem mat som . Ifall det är något som är frestande föreslår vi att ni gör en bokning på den här restaurangen och provar. Restaurangen erbjuder inte online-bordsbeställning. Vi föreslår att ni skickar ett e-post eller ringer för bordsbokning.'
    },
    {
      title: 'Cafe-publik', 
      image: '',
      info: 'Kafé och bar på Göteborgs alternativa nattlivsstråk, Andra Långgatan. Med fokus på öl och gott kaffe, samt en enklare barmeny är Café Publik ett populärt vattenhål för stadens unga. Café Publik togs under 2010 över i ny regi, men har behållit sitt fokus på olika DJ:s nästan varje kväll, trevlig personal och god stämning. Lokalen i en och en halv våning, kompletteras med en liten uteservering på gatan.'
    },
    {
      title: 'Brygghuset', 
      image: '',
      info: 'Hans får en ide, han måste givetvis föra sitt arv vidare, det vill säga brygga öl! Han kommer över en nedgången lokal vid järntorget som han renoverar upp tillsammans med Kristina och startar så småningom Göteborgs första bryggeri. De döper bryggeriet till Jerntorgets Brygghus!'
    },
    {
      title: 'Hops', 
      image: '',
      info: 'Längst ner på Andra Långgatan i hjärtat av Masthuggstorget hittar du ölsorter från världens alla olika hörn. Vårt ölsortiment är väldigt brett och expanderas kontinuerligt. För att uppnå så stor variation som möjligt så försöker vi ta in en så stor variation av öl som möjligt. Allt från olika mikrobryggerier till förslag från gäster, som gör att just din favoritsort eventuellt kan hamna i våra kylar. Nyheter av öl presenteras kontinuerligt på Facebook och Instagram.'
    },
  ]
    const hisingen = [ {
      title: 'Ölstugan', 
      image: '',
      info: 'På Ölstugan 1892 Tullen Hisingen kan ni bland annat äta Pub, Gastropub. Om ni är sugen på detta föreslår vi dig att boka ett bord och kolla på menyn. Tyvärr är det inte möjligt att boka ett bord online. Nå dem på e-post eller telefon för bordsbokning. Ni kan ringa på +4631165616.'
    },
    {
      title: 'Kville-biljard', 
      image: '',
      info: 'Kville Biljard har funnits på Kvilletorget sedan 1994 och erbjuder en unik, lugn, trygg och gemytlig atmosfär med trevlig personal och personlig service. Här samlas vi för att spela biljard, ta ett parti dart, utmana vännerna i en trekamp för att umgås, koppla av i någon av våra barer och äta en god bit mat. Vi har även livespelningar, DJ:s och dansgolv, casino, shuffleboard, Pub Quiz samt företagsevent.'
    },
    {
      title: 'Antibarbarus', 
      image: '',
      info: 'ANTIBARBARUS Hajpade kaffebaren Alkemisten har ett syskon, även detta ställe med placering i Kvillebäcken. Krogen fokuserar på hantverk och hållbarhet, med en street food-baserad meny. Även om restaurangen erbjuder matinfluenser från hela världen, hämtar köket sina råvaror från producenter med lokal förankring. Med en varierande meny får stället stor variation, både vad gäller mat och dryck. Främst är det naturviner som gäller, samt öl från mikrobryggerierna.'
    },
    {
      title: 'Lindholmen-streetfood', 
      image: '',
      info: 'Gatumat, och det är ganska exakt vad det är! Enkelt & gott, opretentiöst men med krav på kvalité och viljan att vara gatusmart kombinerad med en inbjudande attityd! Det som binder oss samman är kärleken till maten, kvalitén i råvarorna och människorna som äter den! Bärs i mängder'
    },
  ]

    return (
      <div style={rootStyle}>
        <Switch>
            <Route exact path="/">
              {data.map((value) => 
                  <ContentItem title={value.area} key={value.area}/>
              )}
            </Route>
                
            <Route path="/järntorget">
                {jarntorget.map((value) => <BarNavigation id={value.title} key={value.title}/>)}
            </Route> 
            <Route path="/hisingen">
                {hisingen.map((value) => <BarNavigation id={value.title} key={value.title}/>)}
            </Route> 
            <Route path="/avenyn">
                {avenyn.map((value) => <BarNavigation id={value.title} key={value.title}/>)}
            </Route>

            {avenyn.map((value) => 
              <Route path={'/' + value.title}>
                <BarItem bar={value} />
              </Route>
            )}

            {jarntorget.map((value) => 
              <Route path={'/' + value.title}>
                <BarItem bar={value} />
              </Route>
            )}

            {hisingen.map((value) => 
              <Route path={'/' + value.title}>
                <BarItem bar={value} />
              </Route>
            )}
        </Switch>
      </div>
    );
}

// class MainContent extends React.Component<Props> {
//   jarntorget: Array<string>
//   hisingen: Array<string>
//   avenyn: Array<string>

//   constructor(props: Props) {
//     super(props)
//     this.state = {url:""}
//     this.handleClick = this.handleClick.bind(this)
//     this.jarntorget = ['Soho', 'Cafe-publik', 'Brygghuset', 'Hops'];
//     this.hisingen = ['Ölstugan', 'Kville-Biljard', 'Antibarbarus', 'Lindholmen-Streetfood'];
//     this.avenyn = ['Yaki-da', 'Hardrock-cafe', 'Lounge', 'Valand'];
//   }

//   handleClick() {
//     return console.log("test")
//   }

//   render() {
//     return(
//     <div style={rootStyle}>
//       <Switch>
//           <Route exact path="/">
//           <Link to="/avenyn" style={{ textDecoration: "none" }}>
//             <ContentItem title="Avenyn" image={imageAvenyn} />
//           </Link>
//           <Link to="/jarntorget" style={{ textDecoration: "none" }}>
//             <ContentItem title="Järntorget" image={imageJarntorget} />
//           </Link>
//           <Link to="/hisingen" style={{ textDecoration: "none" }}>
//             <ContentItem title="Hisingen" image={imageHisingen} />
//           </Link> 
//           </Route>
//           <Route path="/jarntorget">
//               {this.jarntorget.map((value) => <BarNavigation id={value} key={value}/>)}
//           </Route> 
//           <Route path="/hisingen">
//               {this.hisingen.map((value) => <BarNavigation id={value} key={value}/>)}
//           </Route> 
//           <Route path="/avenyn">
//               {this.avenyn.map((value) => <BarNavigation id={value} key={value}/>)}
//           </Route>
//           <Route path="/Yaki-da">
//               <BarItem id="Yaki-da"/>
//           </Route>
//           <Route path="/Hardrock-cafe">
//               <BarItem id="Hardrock-cafe" onClick={this.handleClick}/>
//           </Route>
//           <Route path="/Lounge">
//               <BarItem id="Lounge" />
//           </Route>
//           <Route path="/Valand">
//               <BarItem id="Valand" />
//           </Route>
//       </Switch>
//     </div>
//     )
//   }
// }

const rootStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  minHeight: '90vh',
  justifyContent: "space-around",
  alignItems: "center",
};


export default MainContent; 