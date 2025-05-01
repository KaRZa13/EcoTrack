const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');


const corsOptions = {
  origin: '*',
  allowedHeaders: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true
};


const port = 3010;
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
require('dotenv').config();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// const { data, error } = await supabase
// .from('user')
// .insert([{ name, email }]);
app.get('/user', async (req, res) => {
  try {
    const userId = req.headers['userid'];

    if (!userId)
      return res.status(400).json({ error: 'Missing userId header' });

    const { data, error } =
      await supabase.from('user_profiles').select(`*`).eq('id', userId).single();

    if (error || !data)
      return res.status(500).json({ error: error?.message || 'User not found' });
    res.status(200).json({ message: 'Datas fetched properly', user: data });

  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: 'Unexpected error occurred' });
  }
});

app.get('/company', async (req, res) => {
  try {
    const companyCode = req.headers['company_code'];

    if (!companyCode)
      return res.status(400).json({ error: 'Missing companyCode header' });

    const { data, error } =
      await supabase.from('companies').select(`*`).eq('id', companyCode).single();

    if (error || !data)
      return res.status(500).json({ error: error?.message || 'Company not found' });
    res.status(200).json({ message: 'Company fetched properly', company: data });

  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: 'Unexpected error occurred' });
  }
});


app.get('/history', async (req, res) => {
  try {
    const userId = req.headers['userid'];
    if (!userId)
      return res.status(400).json({ error: 'Missing userid header' });
    const { data, error } =
      await supabase.from('history').select('historyDate').eq('userId', userId).order('historyDate', { ascending: false });

    if (error || !data)
      return res.status(500).json({ error: error?.message || 'History not found' });
    res.status(200).json({ message: 'History fetched properly', history: data });

  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: 'Unexpected error occurred' });
  }
});

app.get('/tips', async (req, res) => {
  try {
    const { data, error } =
      await supabase.from('random_tips').select('*').limit(4);

    if (error || !data)
      return res.status(500).json({ error: error?.message || 'Tips not found' });
    res.status(200).json({ message: 'Tips fetched properly', tips: data });

  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: 'Unexpected error occurred' });
  }
});


app.get('/internRanking', async (req, res) => {
  try {
    const companyCode = req.headers['company_code'];
    if (!companyCode)
      return res.status(400).json({ error: 'Missing companyCode header' });
    const { data, error } =
      await supabase.from('user_profiles').select('*').eq('company_code', companyCode).order('currentScore', { ascending: true })

    if (error || !data)
      return res.status(500).json({ error: error?.message || 'Company ranking not found' });
    res.status(200).json({ message: 'Company ranking fetched properly', ranking: data });

  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: 'Unexpected error occurred' });
  }
});

app.get('/externRanking', async (req, res) => {
  try {
    const { data, error } = await supabase.from('companies').select('*').order('currentScore', { ascending: true })

    if (error || !data)
      return res.status(500).json({ error: error?.message || 'Companies ranking not found' });
    res.status(200).json({ message: 'Companies ranking fetched properly', ranking: data });

  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: 'Unexpected error occurred' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data, error } =
      await supabase.auth.signInWithPassword({ email: email, password: password });

    const { user } = data;
    const { data: userProfile, error: profileError } =
      await supabase.from('user_profiles').select('*').eq('id', user.id).single();

    if (profileError)
      return res.status(500).json({ error: profileError.message });
    res.status(200).json({ message: "Login successful", user: userProfile });

  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Unexpected error occurred" });
  }
});

// app.post('/register', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Step 1: Create the user in auth
//     const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
//       email,
//       password
//     });

//     if (signUpError) {
//       console.error("Sign Up Error:", signUpError); // Enhanced error logging
//       return res.status(500).json({ error: signUpError.message });
//     }

//     console.log("User = ", signUpData.user);

//     res.status(201).json({ message: "User registered successfully", user: signUpData.user });

//   } catch (err) {
//     console.error("Unexpected error:", err);
//     res.status(500).json({ error: "Unexpected error occurred" });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});