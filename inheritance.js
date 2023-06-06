import Teacher, { promote } from './teacher';
import React, { Component } from 'react'; // what you'll see in react

// Default Exports -> import ... from '';
// Named Exports -> import { ... } from '';

const teacher = new Teacher('Luke', 'MSc');
teacher.teach();
