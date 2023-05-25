
## [About Git usernames](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#about-git-usernames)

You can change the name that is associated with your Git commits using the `git config` command. The new name you set will be visible in any future commits you push to GitHub from the command line. If you'd like to keep your real name private, you can use any text as your Git username.

Changing the name associated with your Git commits using `git config` will only affect future commits and will not change the name used for past commits.

## [Setting your Git username for _every_ repository on your computer](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#setting-your-git-username-for-every-repository-on-your-computer)

1.  Open Terminal.

2.  Set a Git username:

    ```shell
    $ git config --global user.name "Mona Lisa"
    ```

3.  Confirm that you have set the Git username correctly:

    ```shell
    $ git config --global user.name
    > Mona Lisa
    ```


## [Setting your Git username for a single repository](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#setting-your-git-username-for-a-single-repository)

1.  Open Terminal.

2.  Change the current working directory to the local repository where you want to configure the name that is associated with your Git commits.

3.  Set a Git username:

    ```shell
    $ git config user.name "Mona Lisa"
    ```

4.  Confirm that you have set the Git username correctly:

    ```shell
    $ git config user.name
    > Mona Lisa
    ```
