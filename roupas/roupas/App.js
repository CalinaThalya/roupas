import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listaProdutos = [
  { nome: 'Camiseta', preco: 29.99, categoria: 'Roupas' },
  { nome: 'Tênis', preco: 79.99, categoria: 'Calçados' },
  { nome: 'Celular', preco: 899.99, categoria: 'Eletrônicos' },
  { nome: 'Livro', preco: 19.99, categoria: 'Livros' }
];

export default function App() {
  return (
    <View style={styles.container}>
      {listaProdutos.map((produto, index) => (
        <View key={index} style={styles.produto}>
          <Text style={styles.nome}>{produto.nome}</Text>
          <Text style={styles.preco}>Preço: R${produto.preco.toFixed(2)}</Text>
          <Text style={styles.categoria}>Categoria: {produto.categoria}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  produto: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
  },
  categoria: {
    fontSize: 16,
  },
});
