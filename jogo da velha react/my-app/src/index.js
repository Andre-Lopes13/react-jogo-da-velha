import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
    return (
        <button className="square" 
            onClick={props.onClick}
            style = {props.isWinning ? { boxShadow: 'inset 0px 0px 3px #4c768f, 0px 0px 3px #4c768f' } : {}}
            >
            {props.value}
        </button>
    );
}

class Board extends React.Component {


    renderSquare(i) {
        const winningArr = this.props.winningSquares.filter((sq) => sq === i);
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                key={i}
                isWinning={winningArr.length ? true : false}
            />
        );
    }

    render() {
            let counter = 0;
            let grid = [];
            let linhas = 3;
            let colunas = 3;
            for (let i = 0; i < linhas; i++) {
                let squares = [];
                for (let j = 0; j < colunas ; j++ , counter++){
                    squares.push(this.renderSquare(counter));
                }
                grid.push(React.createElement('div', { className: 'board-row', key: "row-" + i }, 
                 squares));
            }
            return grid;
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                clicado: null,
            }],
            stepNumber: 0,
            xIsNext: true,
            historyAscending: true,
        };
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                clicado: i,
        }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    handleToggleOrder(historyAscending){
        this.setState({
            historyAscending: historyAscending,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }
    
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Ir para o movimento ' + move + 
                ' \n Movimento feito por : \n ' +
                 (move % 2 === 0 ? '"X"' : ' "O" \n') +
                 'em : (' + (Math.floor(step.clicado / 3 + 1)) + ',' + (Math.floor(step.clicado % 3 + 1)) + ')':  
                'Ir para o começo do jogo';
            const currentStyle = move === this.state.stepNumber ?
                { fontWeight: 'bold' } : { fontWeight: 'normal' };
            return (
                <li key={move} style={currentStyle}>
                    <button onClick={() => this.jumpTo(move)} style={currentStyle} >{desc}</button>
                </li>
            );
        });

        if (!this.state.historyAscending) {
            moves.reverse();
        }
        let status;
        let winningSquares = [];
        if (winner) {
            status = 'Winner: ' + winner.player;
            winningSquares = winner.line;
        } 
        else if (this.state.stepNumber === 9){
            status = 'Empate';
        }
        else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                    squares={current.squares}
                    onClick={ i => this.handleClick(i)}
                    winningSquares={winningSquares}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                    <div>
                    Ordenação do Histórico de Movimentos
                    <RadioOption option= "Crescente" 
                    onChange = {() => this.handleToggleOrder(true)}
                    checked = {this.state.historyAscending}/>
                    <RadioOption option="Decrescente" 
                    onChange={() => this.handleToggleOrder(false)} 
                    checked={!this.state.historyAscending} />
                    </div>
                </div>
            </div>
        );
    }
}
function RadioOption(props) {
    const opt = props.option;
    const label = opt.slice(0,1).toUpperCase() + opt.slice(1);
    return (
        <div>
            <input type = "radio"
            id = {opt}
            name = {opt}
            value = {opt}
            checked = {props.checked}
            onChange = {props.onChange}
            />
            <label htmlFor = {opt}>{label}</label>
        </div>
    );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                player : squares[a],
                line : lines[i], 
            };
        }
    }
    return null;
}
