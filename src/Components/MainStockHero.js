import styled from 'styled-components';
import CardApple from './CardApple';
import CardVanguard from './CardVanguard'
import CardTesla from './CardTesla'
import CardAmazon from './CardAmazon'



const MainStockHero = () => {

return (
<Wrapper>


<div className="container-fluid">
             <div className="row mx-auto align-items-center">


               <div className="col-xl-2 col-lg-2 col-md-0 "></div>
                 <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 mt-4 ">
                    <CardApple />
                 </div>
                 <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 mt-4">
                    <CardVanguard />
                 </div>
                 <div className="col-xl-2 col-lg-2 col-md-3  col-sm-6 mt-4 ">
                    <CardTesla />
                 </div>
                 <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 mt-4 ">
                    <CardAmazon />
                 </div>
                 <div className="col-xl-2 col-lg-2 col-md-0 "></div>

             </div>
         </div>

</Wrapper>
)

}
const Wrapper = styled.div`

display: grid;

`
export default MainStockHero