main = do
    putStrLn "Hello, everybody!"
    putStrLn ("I like even numbers, heres from 0 to 50 " ++ show (filter even [0..50]))