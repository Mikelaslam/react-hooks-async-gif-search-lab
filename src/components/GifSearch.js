import React, { useState } from 'react';

function GifSearch({ onSubmit }){
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(query);
  }
