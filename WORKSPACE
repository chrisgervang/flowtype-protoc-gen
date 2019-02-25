workspace(name = "ts_protoc_gen")


git_repository(
  name = "io_bazel_rules_go",
  commit = "6bee898391a42971289a7989c0f459ab5a4a84dd",  # master as of May 10th, 2018
  remote = "https://github.com/bazelbuild/rules_go.git",
)
load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")
go_rules_dependencies()
go_register_toolchains()

http_archive(
  name = "io_bazel_rules_webtesting",
  strip_prefix = "rules_webtesting-master",
  urls = [
    "https://github.com/bazelbuild/rules_webtesting/archive/master.tar.gz",
    ],
  )
load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")
web_test_repositories()

git_repository(
  name = "build_bazel_rules_nodejs",
  remote = "https://github.com/bazelbuild/rules_nodejs.git",
  commit = "d334fd8e2274fb939cf447106dced97472534e80",
)
load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")
#
node_repositories(
  package_json = ["//:package.json"],
  yarn_version = "1.12.3",
  node_version = "10.15.1",
  node_repositories = {
    "10.15.1-darwin_amd64": ("node-v10.15.1-darwin-x64.tar.gz", "node-v10.15.1-darwin-x64", "327dcef4b61dead1ae04d2743d3390a2b7e6cc6c389c62cfcfeb0486c5a9f181"),
    "10.15.1-linux_amd64": ("node-v10.15.1-linux-x64.tar.xz", "node-v10.15.1-linux-x64", "77db68544c7812e925b82ccc41cd4669fdeb191cea8e20053e3f0e86889c4fce"),
    "10.15.1-windows_amd64": ("node-v10.15.1-win-x64.zip", "node-v10.15.1-win-x64", "bb5bdc9363e4050c94b3f82888141b81630230f86e520abb7dde49081f1292b9"),
  },
)

load("@ts_protoc_gen//:defs.bzl", "typescript_proto_dependencies")
typescript_proto_dependencies()

git_repository(
  name = "build_bazel_rules_typescript",
  remote = "https://github.com/bazelbuild/rules_typescript.git",
  commit = "3488d4fb89c6a02d79875d217d1029182fbcd797",
  )
load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")
ts_setup_workspace()
