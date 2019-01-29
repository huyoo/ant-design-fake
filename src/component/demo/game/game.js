/**
 * author: huyoo
 * decs: 3x3五子棋
 * time: 2018/9/9
 */
import React, {Component} from 'react';
import Board from './board';
import './style.css'

export default class Game extends Component{
    render(){
        return (
            <div>
                <div className='game-board'>
                    <Board/>
                </div>
                <div className='game-info'>
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}