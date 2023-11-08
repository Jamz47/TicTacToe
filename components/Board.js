import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const checkWinner = () => {
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
        return [a];
      }
    }

    return false;
  };
  const winner = checkWinner();

  const handlePress = index => {
    if (board[index] !== null) {
      // this logic can not change or update the value on existing press box
      return;
    }
    if (checkWinner(turn)) {
      return console.log('winner');
      // setBoard(turn);
    }
    // setBoard( index);
    const copyState = [...board];
    copyState[index] = turn ? 'X' : 'O';
    setBoard(copyState);
    setTurn(!turn);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(''));
  };

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
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
      <View style={styles.box1}>
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
      <View style={styles.box1}>
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
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
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
});
