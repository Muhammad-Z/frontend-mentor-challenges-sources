import { useState } from 'react';
import { TasksProvider } from '../components/TasksContext.jsx';
import PassView from "../components/PassView.jsx";
import OptionsForm from "../components/OptionsForm.jsx";
import StrengthView from "../components/StrengthView.jsx";
import GenerateBtn from "../components/GenerateBtn.jsx";

import Head from 'next/head.js';

export default () => {
  const [password, setPassword] = useState(false);

  return (<div>
    <Head>
      <link rel="stylesheet" href=
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
      </link>
    </Head>
    <main>
      <h1>Password Generator</h1>
      <TasksProvider>
        <PassView password={password} />
        <OptionsForm />
        <StrengthView />
        <GenerateBtn setPassword={setPassword} />
      </TasksProvider>
    </main>
  </div>
  )
};
