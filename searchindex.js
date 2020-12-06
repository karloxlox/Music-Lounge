// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("HOME.html", "Untitled Page", "untitled page nbsp we are updated in providing the top most feeds music industry lounge all rights reserved like us on facebook follow twitter email where comes to life home lessons games notessimo quiz contact ", "");
   this[database_length++] = new SearchPage("LESSONS.html", "Untitled Page", "untitled page how to read music staff lesson clefs notes note values time signature rests dots and ties accidentals ii key simple meter compound asymmetric strong weak beats syncopation lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_1.html", "Untitled Page", "untitled page how to read music staff lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_2.html", "Untitled Page", "untitled page how to read music clefs lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_3.html", "Untitled Page", "untitled page how to read music notes lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_4.html", "Untitled Page", "untitled page how to read music note values lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_5.html", "Untitled Page", "untitled page how to read music time signature lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_6.html", "Untitled Page", "untitled page how to read music rests lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_7.html", "Untitled Page", "untitled page how to read music dots and ties lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_8.html", "Untitled Page", "untitled page how to read music accidentals lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_9.html", "Untitled Page", "untitled page how to read music accidentals ii lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_10.html", "Untitled Page", "untitled page how to read music key signature lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_11.html", "Untitled Page", "untitled page how to read music simple meter lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_12.html", "Untitled Page", "untitled page how to read music compound meter lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_13.html", "Untitled Page", "untitled page how to read music asymmetric meter lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_14.html", "Untitled Page", "untitled page how to read music strong and weak beats lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("LESSON_15.html", "Untitled Page", "untitled page how to read music syncopation lesson lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("GAMES.html", "Untitled Page", "untitled page music lounge all rights reserved like us on facebook follow twitter email home lessons games notessimo quiz contact nbsp ", "");
   this[database_length++] = new SearchPage("NOTESSIMO.html", "Untitled Page", "untitled page notessimo home lessons games quiz contact nbsp us music lounge all rights reserved like on facebook follow twitter email ", "");
   this[database_length++] = new SearchPage("NAME_THAT_NOTE.html", "Untitled Page", "untitled page name that note home lessons games notessimo quiz contact nbsp us music lounge all rights reserved like on facebook follow twitter email ", "");
   this[database_length++] = new SearchPage("CONTACT_US.html", "Untitled Page", "untitled page music lounge all rights reserved like us on facebook follow twitter email subject general feedback contact request price quote employment information name address city state zip home phone work fax number morning afternoon evening what is the best way to you? mail we love help lessons games notessimo quiz nbsp ", "");
   return this;
}
