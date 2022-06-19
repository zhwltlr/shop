/*eslint-disable */


import { useState } from 'react';
import { Navbar,Container,NavDropdown, Nav, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';

import {Link, Route , Switch} from 'react-router-dom';
// import data from './data.js';

// axios
import axios from 'axios';




function App() {

  let [shoes,shoes변경] = useState(Data);
  // let [재고,재고변경] = useState(Data);
  // let [newArray, newArray변경 ] = useState (Data)
  // let [입력값,입력값변경] = useState(Data)



  // 재고표시 해보기
  let [ 재고, 재고변경 ] = useState(10,11,12);
  // 모든 중요한 데이터는 상위 컴포넌트에 저장하는 것이 중요


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to = '/'>Home</Nav.Link>
            <Nav.Link as={Link} to = '/detail'>Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Switch>

    

    {/* 라우팅 하는 법 */}
    <Route exact path='/'>
      <div>
        <div className='Jumbotron'>
          <h1>20% Season Off</h1>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Button variant="primary">Learn more</Button>{' '}
        </div>
        <div className="container">
        <div className="row">
          {/* <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width='100%' />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}{shoes[0].price}</p>
          </div> */}

          { 
            shoes.map((a,i)=>{
             return <Card shoes={shoes[i]} i={i} />
            })
          }

        {/* 숙제 */}
        {/* component만들어 첨부, 데이터 바인딩 완료, component 반복문만들기 */}
          {/* <Card shoes = {shoes[0]} />
          <Card shoes = {shoes[1]} />
          <Card shoes = {shoes[2]} />
  */}
{/* 
        {
          shoes.map((a,i)=>{
            return <Card shoes = {shoes[i]} i={i} key = {i} />
          })
        } */}
      </div>
      {/* ajax요청 실습 */}
      <button className='btn btn-primary' onClick={()=>{


        // post 할 수도 있다
        // axios.post('서버url',{id:'cojisik',pw:1234})


        // 로딩중이라는 ui 띄움
        // ui를 컴포넌트로 저장해놓고 true일때만 보여주는 방식


        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
          // 로딩중이라는 ui 제거

          // var arrayCopy = [...result.data];
          // arrayCopy.unshift()
          shoes변경([...shoes, ...result.data]);
          // 더보기 누르면 새로운 데이터가 추가되는 법

        })
        .catch(()=>{
          // 로딩중이라는 ui 제거
          console.log('실패했음')
        })
      }}>더보기</button>

      {/* 변수나 state로 누른 횟수 저장하고 */}
      {/* 새로운 url로 데이터 요청 가능 */}


      {/* 이것도 가능하다 */}
      {/* fetch().then().catch(); */}
      {/* 단점: 오브젝트로 변환이 안됨*/}



    </div>
    
      </div>
      
    </Route>
    <Route path='/detail/:id'>
      {/* :은 아무 문자가 오던간에 이동해달라 */}
      <Detail shoes = {shoes} 재고={재고} 재고변경={ 재고변경}/>
    {/* </Route> */}

    {/* <Route path='/어쩌구' component={Modal}></Route> */}


    {/* <Route path='/detail/:id' > */}
      <div>
        상세정보 페이지 입니다.
      </div>
    </Route>
    </Switch>
    {/* 여러개가 맞아도 하나만 보여달라는 뜻 switch */}
    {/* switch를 많이 해놓고 쓰게 됨 */}
    



    {/* ajax */}
    {/* 서버에 새로고침없이 요청을 할 수 있게 도와줌 */}
    



    </div>
  );
  
}

// 근데 만약 데이터의 순서가 바뀐다면?
// data.js에 저장되어 있는 id를 확인하면 영구적으로 번호가 지정되어 있음
// detail.js 데이터 바인딩할때 shoes의 0번째 제목을 불러오는 것이 아니라 전체 자료중에 영구번호 0을 가진 데이터 제목





function Card (props){
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg"} width='100%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

// function CardAdd (props){
//   return(
//     <div className="col-md-4">
//       <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg" } width='100%' />
//       <h4>{props.newArray.title}</h4>
//       <p>{props.newArray.content} & {props.newArray.price}</p>
//     </div>
//   )
// }

export default App;
