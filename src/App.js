import './App.css';
import Produto from './Components/Produto/Produto';

function App() {
  return (
    <div className="App">
      <Produto nome="La Vie Est Belle" preco="517,90" img="https://lancome.vteximg.com.br/arquivos/ids/157539/ot-3605532612690-LaVieEstBelle-EDP.jpg?v=636305347875830000"/>
      <Produto nome="Good Girls" preco="569,99" img="https://epocacosmeticos.vteximg.com.br/arquivos/ids/438948-500-500/good-girl-eau-de-parfum-carolina-herrera-perfume-feminino-30ml.jpg?v=637600522703130000"/>
      <Produto nome="Lady Million" preco="669,00" img="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw7ce1c5e1/images/hi-res-BR/3349668508587.1_1500px.jpg?sw=1200&sh=1200&sm=fit"/>
      <Produto nome="Olympea" preco="589,90" img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQi3TvAIxKYEhXsvoIGDBPzUCfhhoVzbIYZ75vqXgG-YATioHQRp4Xka3p1v5oXRSxFNpwNaKqGnuQGeMvzSfclQ3LAMD1KNrYV0C0F6j33U2pTVKYtyr6-zg&usqp=CAE"/>
      <Produto nome="CHCH" preco="559,00" img="https://a-static.mlcdn.com.br/800x560/perfume-carolina-herrera-ch-feminino-eau-de-toilette-100-ml/amobeleza/1590/5045d0758bd778debea23087b92ef9ae.jpeg"/>
      <Produto nome="212 VIP" preco="539,00" img="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwddc7f4f5/images/hi-res-BR/8411061711774.1(1)_1500px.jpg?sw=556&sh=680&sm=fit"/>
    </div>
  );
}

export default App;
