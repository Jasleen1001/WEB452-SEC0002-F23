/*
    Assignment 05
*/

$(document).ready(function () {
  // your code here
  class ContentItem {
    constructor(id, name, description, category_genre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category_genre = category_genre;
    }
    updateContentItem(id, name, description, category_genre) {
        if (id === this.id) {
            if (name !== null) {
                this.name = name;
            }

            if (description !== null) {
                this.description = description;
            }

            if (category_genre !== null) {
                this.category_genre = category_genre;
            }
        }
    }
    toString() {
        return `<div id = "content-item-${this.id}">
        <h2>${this.name}</h2>
        <p>${this.description}</p>
        <div>${this.category_genre}</div>
        </div>`;
    }
  }
  const ContentItems = [
    new ContentItem(
       0,
       "Pride and Prejudice",
       "Revolving around the complex dynamics of social class, family and romance in early 19th-century England.",
       "Romantic Fiction"
    ),
    new ContentItem(
        1,
        "Moby-Dick",
        "Herman Melville's epic tale of Captain Ahab's relentless pursuit of the great white whale, Moby-Dick, and the philosophical exploration of obsession and fate.",
        "Adventure Fiction"
    ),
    new ContentItem(
        2,
        "1984",
        "George Orwell's dystopian masterpiece set in a totalitarian regime, exploring the themes of surveillance, thought control, and the consequences of a repressive government.",
        "Dystopian Fiction"
    ),
    new ContentItem(
        3,
        "To Kill a Mockingbird",
        "Harper Lee's poignant novel that tackles racial injustice and moral growth through the eyes of a young girl, Scout Finch, in the American South during the 1930s.",
        "Coming-of-Age Drama"
    ),
    new ContentItem(
        4,
        "Frankenstein",
        "Mary Shelley's gothic classic that delves into themes of scientific ambition, identity, and the consequences of playing god through the creation of a monster.",
        "Gothic Horror"
    ),
  ];
  $("#content-item-list").css({
    border: "2px solid #333",
    width: "70%",
    padding: "20px",
    margin: "20px auto",
  });
  const contentList = $
  ("#content-item-list");

  ContentItems.forEach((item) => {
    const contentHTML = item.toString();
    contentList.append(contentHTML);
  });
  
  $('#updateSuccess').click(function () {
    contentItems[0].updateContentItem(0, "Dessert Dreams", null, "Culinary Arts");

    contentList.empty();
    contentItems.forEach((item) => {
        const contentHTML = item.toString();
        contentList.append(contentHTML);
    });
  });

  $('#updateFail').click(function () {
    contentItems[1].updateContentItem(1, null, "This should not work", null);

    contentList.empty();
    contentItems.forEach((item) => {
        const contentHTML = item.toString();
        contentList.append(contentHTML);
    });
});
});
