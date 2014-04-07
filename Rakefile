require 'jekyll'

desc "Install Bower dependencies"
task :install do
  system "bower install"
end

desc "Generate blog files"
task :generate => [:install] do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site",
    "config" => "_config.yml"
  })).process
end

desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  # Get the origin to which we are going to push the site.
  origin = `git config --get remote.origin.url`

  # Make a temporary directory for the build before production release
  # This will be torn down once the task is complete
  Dir.mktmpdir do |tmp|
    # Copy accross our compiled _site directory
    cp_r "_site/.", tmp

    # Switch in to the tmp dir
    Dir.chdir tmp

    # Prepare all the content in the repo for deployment
    system "git init" # Init the repo
    system "git add ." # Add all the files
    system "git commit -m \"Site updated at #{Time.now.utc}\"" # Commit files

    # Add the origin remote for the parent repo to the tmp folder.
    system "git remote set-url origin #{origin}"

    # Push the files to the gh-pages branch, forcing an overwrite.
    system "git push origin master:refs/heads/gh-pages --force"

    system "echo Done with success!"
  end
end

task :default => :publish
