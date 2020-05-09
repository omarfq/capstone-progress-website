const LAB_DATA = [
  {
    id: 1,
    moduleName: 'Web Application Access Exploitation',
    items: [
      {
        id: 1,
        title: 'Information Gathering',
        description:
          "What's that IP address that you're looking for? Enter here!",
        flag: '151.101.1.69',
      },
      {
        id: 2,
        title: 'File Upload Vulnerability',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        flag: 'This is a secret file',
      },
      {
        id: 3,
        title: 'SQL Injection',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        flag: 'john@doe.com',
      },
      {
        id: 4,
        title: 'XSS and CSRF',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        flag: 'This is a script',
      },
    ],
  },
  {
    id: 2,
    moduleName: 'Binary Exploitation',
    items: [
      {
        id: 1,
        title: 'Buffer Overflow',
        description:
          'This event happens when the length of the data entered exceeds the buffer limit and this causes the program to write data outside the allocated buffer area and may overwrite some parts of the memory that were used to hold data used by the program which makes it unavailable and causes the program to crash.',
        flag: '123.456.789',
      },
      {
        id: 2,
        title: 'Format String Attack',
        description:
          'It involves generating excessive data, thus leveraging the use of format characters in a format string.',
        flag: 'This is a secret file',
      },
      {
        id: 3,
        title: 'Heap Exploitation',
        description:
          'Refers to a vulnerability where more data than can fit in the allocated buffer is read in. This could lead to heap metadata corruption, or corruption of other heap objects, which could in turn provide a new attack surface',
        flag: 'john@doe.com',
      },
      {
        id: 4,
        title: 'Reverse Engineering',
        description:
          'refers to the decompilation of an application, disregarding completely the technology stack that it uses, so that the hacker can get access to the app’s source code.',
        flag: 'This is a script',
      },
    ],
  },
  {
    id: 3,
    moduleName: 'Password Cracking',
    items: [
      {
        id: 1,
        title: 'Password Hashing and Acquisition Methods',
        description:
          'This method performs a one-way transformation on a password, thus turning the password into another completely different string. The “one-way” part is making the claim that it is impossible to go the other way around.',
        flag: '123.456.789',
      },
      {
        id: 2,
        title: 'Brute Force Cracking',
        description:
          'It refers to an attempt to crack a password or username using a trial and error approach.',
        flag: 'This is a secret file',
      },
      {
        id: 3,
        title: 'Dictionary-based Hash Cracking',
        description:
          'It refers to a type of attack where the attacker tries to outsmart or defeat a particular cipher or authentication mechanism by trying to determine its decryption key or passphrase using an approach of trial and error with millions of likely possibilities.',
        flag: 'john@doe.com',
      },
      {
        id: 4,
        title: 'Rule-based Hash Cracking',
        description:
          'A rule-based password attack is a way of focusing a password cracking technique when an attacker knows which rules passwords in a particular system are based on, such as alphanumeric and eight characters long.',
        flag: 'This is a script',
      },
    ],
  },
  {
    id: 4,
    moduleName: 'Network Mapping',
    items: [
      {
        id: 1,
        title: 'Network Scanning',
        description:
          'It refers to the gathering of information about computing systems or servers through the use of a particular computer network.',
        flag: '123.456.789',
      },
      {
        id: 2,
        title: 'Focused Network Scanning',
        description:
          'A more detailed and in depth approach to network scanning. Focusing more on one aspect of traffic and packages.',
        flag: 'This is a secret file',
      },
      {
        id: 3,
        title: 'Vulnerability Scanning',
        description:
          'It refers to the analysis or inspection of vulnerable or potentially exploitable computer software, hardware, or network with the sole purpose of identifying security holes.',
        flag: 'john@doe.com',
      },
      {
        id: 4,
        title: 'Network Visualization',
        description:
          'This special visualization is often used to visualize complex relationships between huge network systems.',
        flag: 'This is a script',
      },
    ],
  },
];

export default LAB_DATA;
