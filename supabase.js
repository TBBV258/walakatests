// Replace with your Supabase credentials
const supabaseUrl = 'https://your-project-ref.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Sign Up Function
async function signUp(email, password) {
  const { user, session, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Error signing up:', error.message);
    alert('Error signing up: ' + error.message);
  } else {
    console.log('User created:', user);
    alert('User created successfully!');
  }
}

// Log In Function
async function logIn(email, password) {
  const { user, session, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Error logging in:', error.message);
    alert('Error logging in: ' + error.message);
  } else {
    console.log('Logged in as:', user);
    alert('Logged in successfully!');
  }
}

// Log Out Function
async function logOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error logging out:', error.message);
    alert('Error logging out: ' + error.message);
  } else {
    console.log('User logged out');
    alert('Logged out successfully!');
  }
}
