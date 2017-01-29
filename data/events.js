function generateRandomColor(length) {
  var color = '';
  var charset = 'abcdef0123456789';
  for (var i = 0; i < length; i++)
    color += charset.charAt(Math.floor(Math.random() * charset.length));
  return color;
}

const events =
  [
    {
      'title': 'Pattern Recognition - Project',
      'allDay': true,
      'start': new Date(2017, 0, 2, 8, 0, 0),
      'end': new Date(2017, 0, 5, 18, 0, 0),
      'hexColor': generateRandomColor(6),
      'progress': 35
    },
    {
      'title': 'Software Design - Project',
      'start': new Date(2017, 0, 6),
      'end': new Date(2017, 0, 9),
      'hexColor': generateRandomColor(6),
      'progress': 50
    },

    {
      'title': 'SOAP - Project',
      'start': new Date(2017, 0, 9),
      'end': new Date(2017, 0, 12),
      'hexColor': generateRandomColor(6),
      'progress': 50
    },

    {
      'title': 'User Interface Design - Project',
      'start': new Date(2017, 0, 13),
      'end': new Date(2017, 0, 17),
      'hexColor': generateRandomColor(6),
      'progress': 50
    },

    {
      'title': 'Input-Output Systems - Lab Test',
      'start': new Date(2017, 0, 20, 10, 0, 0),
      'end': new Date(2017, 0, 20, 11, 0, 0),
      'hexColor': generateRandomColor(6),
      'progress': 50
    },
    {
      'title': 'Computer Networks - Exam',
      'start': new Date(2017, 0, 23, 12, 30, 0),
      'end': new Date(2017, 0, 23, 14, 0, 0),
      desc: 'Location: Room P03',
      'hexColor': generateRandomColor(6),
      'progress': 50
    },
    {
      'title': 'Computer Graphics - Exam',
      'start': new Date(2017, 0, 26, 13, 30, 0),
      'end': new Date(2017, 0, 26, 15, 0, 0),
      desc: 'Location: Room D21',
      'hexColor': generateRandomColor(6),
      'progress': 50
    },
    {
      'title': 'Functional Programming - Exam',
      'start': new Date(2017, 0, 29, 8, 0, 0),
      'end': new Date(2017, 0, 29, 10, 0, 0),
      desc: 'Location: Room P03',
      'hexColor': generateRandomColor(6),
      'progress': 50
    },
    {
      'title': 'Digital Systems Design - Exam',
      'start': new Date(2017, 1, 2, 12, 30, 0),
      'end': new Date(2017, 1, 2, 14, 0, 0),
      desc: 'Location: Room C05',
      'hexColor': generateRandomColor(6),
      'progress': 50
    },
    {
      'title': 'Data Structures and Algorithms - Exam',
      'start': new Date(2017, 1, 5, 17, 30, 0),
      'end': new Date(2017, 1, 5, 19, 0, 0),
      desc: 'Location: Room P03',
      'hexColor': generateRandomColor(6),
      'progress': 50
    },
    {
      'title': 'Image Processing - Exam',
      'start': new Date(2017, 1, 9, 9, 30, 0),
      'end': new Date(2017, 1, 9, 11, 0, 0),
      desc: 'Location: Room N09',
      'hexColor': generateRandomColor(6),
      'progress': 50
    }
  ];