import React from "react";
import "./style.css";
import people from "../../assets/img/people.png";
import count from "../../assets/img/count.png";
import menu from "../../assets/img/menu.png";

const Hero = ({ boards, setBoards }) => {
  console.log(boards);
  return (
    <main className="main">
      <div className="scroll">
        <h2 className="title">
          Заявки <span>22</span>
        </h2>
        <div className="wrapper">
          {boards.map((board) => (
            <div key={board.id} className="board">
              <div className="board_title">{board.title} <span></span> {board.items.length}</div>
              <div className="board_content">
                {board.items.length === 0 ? (
                  <div>Salom</div>
                ) : board.items.map((item) => (
                  <div className="item">
                    <button className="menu">
                      <img src={menu} alt="" />
                    </button>
                    <h3 className="item_title">{item.title}</h3>
                    <p className="item_desc">{item.desc.length > 28 ? item.desc.slice(0, 28) + "..." : item.desc}</p>
                    <div className="item_info_wrap">
                      <button>В приоритете</button>
                      <button>
                        <img src={people} alt="" />
                        <span>{item.people}</span>
                      </button>
                      <button>
                        <img src={count} alt="" />
                        <span>{item.count}</span>
                      </button>
                    </div>
                    <div className="user_info">
                      <img src={item.img} alt="" />
                      <div className="user_desc">
                        <span>Рекруитер</span>
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
