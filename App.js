import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
// import Board from './components/Board';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); //state with Array length is (9) which is Empty(null)
  const [turn, setTurn] = useState(true); // state which is create for change the turn if there is "X" after this value will change automatically to "O" which is true

  const check = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winner) {
      const [a, b, c] = logic;
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (board.every(square => square !== null)) {
      return 'Draw!!';
    }
    return false;
  };
  const winner = check();

  const handlePress = index => {
    if (board[index] !== null) {
      return;
    }
    if (check(turn)) {
      return
    }

    const copyState = [...board]; //  [...board] this is the spread operator for shallow copy objects or arrays.
    copyState[index] = turn ? 'X' : 'O'; // if condition  "X" or "O"
    setBoard(copyState);
    setTurn(!turn);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Text style={styles.winner}>Winner : {winner} </Text>
      <View style={styles.container1}>
        <View>
          <TouchableOpacity onPress={() => handlePress([0])}>
            <View style={styles.box}>
              <Text style={styles.textPrint}>{board[0]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress([1])}>
            <View style={styles.box}>
              <Text style={styles.textPrint}>{board[1]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress([2])}>
            <View style={styles.box}>
              <Text style={styles.textPrint}>{board[2]}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handlePress([3])}>
            <View style={styles.box}>
              <Text style={styles.textPrint}>{board[3]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress([4])}>
            <View style={styles.box}>
              <Text style={styles.textPrint}>{board[4]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress([5])}>
            <View style={styles.box}>
              <Text style={styles.textPrint}>{board[5]}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handlePress([6])}>
            <View style={styles.box}>
              <Text style={styles.textPrint}>{board[6]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress([7])}>
            <View style={styles.box}>
              <Text style={styles.textPrint}>{board[7]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress([8])}>
            <View style={styles.box}>
              <Text style={styles.textPrint}>{board[8]}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonStyle}>
        <Text onPress={() => handleReset()} style={styles.reset}>
          RESET
        </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1B21',
  },
  title: {
    color: '#26ffcb',
    marginTop: 20,
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container1: {
    backgroundColor: '#0f1B21',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: '#1f3540',
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  textPrint: {
    textAlign: 'center',
    fontSize: 60,
    marginTop: 15,
    color: 'red',
    fontWeight: 'bold',
  },
  reset: {
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  winner: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
