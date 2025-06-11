const cors = require('cors');
const path = require('path');
const fs = require('fs');
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
const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_KEY,
  {
    auth: {
      // Server-side configuration
      persistSession: false, // Don't persist on server side
      autoRefreshToken: false, // Don't auto-refresh on server
      detectSessionInUrl: false, // Not needed on server
      flowType: 'pkce'
    },
    // Add global configuration
    global: {
      headers: {
        'X-Client-Info': 'supabase-js-node'
      }
    }
  }
);

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

app.get('/form', async (req, res) => {
  try {
    const categoryName = req.headers['category'];
    if (!categoryName)
      return res.status(400).json({ error: 'Missing category header' });

    const { data: category, error: categoryError } = await supabase
      .from('categories')
      .select('*')
      .eq('name', categoryName)
      .single();

    if (categoryError || !category) {
      console.error('Category error:', categoryError?.message || 'Category not found');
      return res.status(500).json({ error: categoryError?.message || 'Category not found' });
    }

    const { data: questionsWithAnswers, error: questionsError } = await supabase
      .from('questions')
      .select(`
        *,
        answers (
          id,
          content,
          idquestion,
          value
        )
      `)
      .eq('category', category.id)
      .order('id', { ascending: true })
      .limit(10);

    if (questionsError) {
      console.error('Questions error:', questionsError.message);
      return res.status(500).json({ error: questionsError.message });
    }

    res.status(200).json({
      message: 'Questions and answers fetched properly',
      data: questionsWithAnswers
    });

  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: 'Unexpected error occurred' });
  }
});

app.post('/form', async (req, res) => {
  const data = req.body;

  const filename = `reponses_${Date.now()}.json`;
  const filePath = path.join(__dirname, filename); 

  fs.writeFile(filePath, JSON.stringify(data), (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return res.status(500).json({ error: 'Error writing file' });
    }
    res.status(200).json({ message: 'File written successfully', filePath });
  });

})

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

app.get('/categories', async (req, res) => {
  try {
    const { data, error } = await supabase.from('categories').select('*')

    if (error || !data)
      return res.status(500).json({ error: error?.message || 'Categories not found' });
    res.status(200).json({ message: 'Categories fetched properly', categories: data });

  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: 'Unexpected error occurred' });
  }
});

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const { data, error } =
//       await supabase.auth.signInWithPassword({ email: email, password: password });

//     const { user } = data;
//     const { data: userProfile, error: profileError } =
//       await supabase.from('user_profiles').select('*').eq('id', user.id).single();

//     if (profileError)
//       return res.status(500).json({ error: profileError.message });
//     console.log('Token de session:', data.session.access_token)
//     res.status(200).json({ message: "Login successful", user: userProfile });
//     router.push('/');

//   } catch (err) {
//     console.error("Unexpected error:", err);
//     res.status(500).json({ error: "Unexpected error occurred" });
//   }
// });

app.post('/register', async (req, res) => {
  const { name, email, password, company_code } = req.body;

  if (!email || !password) {
    return res.status(400).json({error:"Email and password are required."});}

  try {
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({email,password});
    if (signUpError) {console.error("Sign Up Error:", signUpError);
      return res.status(500).json({ error: signUpError.message });
    }
    const { data: profileData, error: profileError } = await supabase
      .from('user_profiles')
      .insert([{ id: signUpData.user.id, firstname: name, company_code: company_code }])

    if (profileError) {console.error("Profile Creation Error:", profileError);
      return res.status(500).json({ error: profileError.message });
    }
    res.status(201).json({message:"User registered successfully", user: signUpData.user});
  } catch (err) {console.error("Unexpected error:", err);
    res.status(500).json({error:"Unexpected error occurred"});
  }
});

// Start the server
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});