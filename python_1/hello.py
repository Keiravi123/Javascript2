def calculate_average_rating(ratings_list):

    total_ratings = sum(ratings_list)
    number_of_ratings = len(ratings_list)
    average_rating = total_ratings / number_of_ratings if number_of_ratings > 0 else 0
    return average_rating

def does_cat_like_flavor(average_rating):
    
    return average_rating >= 6

def display_message(likes_flavor):
    
    if likes_flavor:
        print("The cat loves the ice cream flavor!")
    else:
        print("The cat doesn't like the ice cream flavor...")

def evaluate_individual_ratings(ratings_list):
   
    for flavor_rating in ratings_list:
        if flavor_rating >= 7:
            print(f"This flavor with a rating of {flavor_rating} is liked by the cat.")
        else:
            print(f"This flavor with a rating of {flavor_rating} is not liked by the cat.")

def evaluate_ice_cream_flavor(ratings_list):
   
    average_rating = calculate_average_rating(ratings_list)
    
    cat_likes_flavor = does_cat_like_flavor(average_rating)
    
    display_message(cat_likes_flavor)
    
    evaluate_individual_ratings(ratings_list)

ice_cream_ratings = [8, 7, 9, 5, 6]


evaluate_ice_cream_flavor(ice_cream_ratings)
