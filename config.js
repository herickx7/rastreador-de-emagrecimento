// ============================================================
//  Configuração do Firebase (projeto: site-anotar-emagrecimento)
//  Banco: Realtime Database, sem login.
//  Seus dados ficam em  /tabela/<TABELA_DATA_KEY>  no banco.
//  A mesma chave precisa estar nas regras (database.rules.json).
//  Se apagar o apiKey, o app passa a salvar só no aparelho.
// ============================================================
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCWhwBCUM2I2I0pwil5nINYEFWAjxcd8NM",
  authDomain: "site-anotar-emagrecimento.firebaseapp.com",
  databaseURL: "https://site-anotar-emagrecimento-default-rtdb.firebaseio.com",
  projectId: "site-anotar-emagrecimento",
  storageBucket: "site-anotar-emagrecimento.firebasestorage.app",
  messagingSenderId: "985990127412",
  appId: "1:985990127412:web:9b3bf336e729717ae54f61",
  measurementId: "G-ZET9DGQX2D"
};

// Chave do seu espaço de dados (não precisa mexer).
window.TABELA_DATA_KEY = "hztcrd36u3031fz7adkdbhfq";
