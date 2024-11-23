import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';
import axios from "axios";
const RegistroUsuario = () => {



    
    
    const handleRegister = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/register", {
          username,
          useremail,
          password,
          
          
        });
        Alert.alert(response.data.message);
       
        
        
      } catch (error) {
        Alert.alert("Login failed");
      }
    };







  // Estado para almacenar los valores de los campos
  const [username, setUsername] = useState('');
  const [useremail, setUsermail] = useState('');
  const [password, setPassword] = useState('');

  // Solo renderizamos el formulario y mostramos los campos sin la lógica de envío
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>

      {/* Campo de nombre */}
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={username}
        onChangeText={setUsername}
      />

      {/* Campo de correo electrónico */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={useremail}
        onChangeText={setUsermail}
        keyboardType="email-address"
      />

      {/* Campo de contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
         {/* Campo de contraseña */}
         <TextInput
        style={styles.input}
        placeholder="Confirma la Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Botón de registro, sin la lógica asociada */}
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Aseguramos que el formulario se vea centrado en la pantalla
    padding: 16,
    backgroundColor: '#f4f4f9', // Agregamos un color de fondo para mejor visibilidad
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '100%', // Hacemos que los inputs tengan un ancho del 100%
    maxWidth: 300, // Limitar el tamaño máximo de los inputs
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default RegistroUsuario;
