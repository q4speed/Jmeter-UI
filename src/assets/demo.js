export default {
  "declaration": {
    "attributes": {
      "version": "1.0",
      "encoding": "UTF-8"
    }
  },
  "elements": [
    {
      "type": "element",
      "name": "jmeterTestPlan",
      "attributes": {
        "version": "1.2",
        "properties": "5.0",
        "jmeter": "5.2.1"
      },
      "elements": [
        {
          "type": "element",
          "name": "hashTree",
          "elements": [
            {
              "type": "element",
              "name": "TestPlan",
              "attributes": {
                "guiclass": "TestPlanGui",
                "testclass": "TestPlan",
                "testname": "Condition",
                "enabled": "true"
              },
              "elements": [
                {
                  "type": "element",
                  "name": "boolProp",
                  "attributes": {
                    "name": "TestPlan.functional_mode"
                  },
                  "elements": [
                    {
                      "type": "text",
                      "text": "false"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "boolProp",
                  "attributes": {
                    "name": "TestPlan.serialize_threadgroups"
                  },
                  "elements": [
                    {
                      "type": "text",
                      "text": "false"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "boolProp",
                  "attributes": {
                    "name": "TestPlan.tearDown_on_shutdown"
                  },
                  "elements": [
                    {
                      "type": "text",
                      "text": "true"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "stringProp",
                  "attributes": {
                    "name": "TestPlan.comments"
                  },
                  "elements": [
                    {
                      "type": "text",
                      "text": "Test Plan Comments"
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "stringProp",
                  "attributes": {
                    "name": "TestPlan.user_define_classpath"
                  }
                },
                {
                  "type": "element",
                  "name": "elementProp",
                  "attributes": {
                    "name": "TestPlan.user_defined_variables",
                    "elementType": "Arguments",
                    "guiclass": "ArgumentsPanel",
                    "testclass": "Arguments",
                    "testname": "User Defined Variables",
                    "enabled": "true"
                  },
                  "elements": [
                    {
                      "type": "element",
                      "name": "collectionProp",
                      "attributes": {
                        "name": "Arguments.arguments"
                      },
                      "elements": [
                        {
                          "type": "element",
                          "name": "elementProp",
                          "attributes": {
                            "name": "v1",
                            "elementType": "Argument"
                          },
                          "elements": [
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "Argument.name"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "v1"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "Argument.value"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "1234567890"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "Argument.metadata"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "="
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "element",
              "name": "hashTree",
              "elements": [
                {
                  "type": "element",
                  "name": "ThreadGroup",
                  "attributes": {
                    "guiclass": "ThreadGroupGui",
                    "testclass": "ThreadGroup",
                    "testname": "测试条件",
                    "enabled": "true"
                  },
                  "elements": [
                    {
                      "type": "element",
                      "name": "stringProp",
                      "attributes": {
                        "name": "ThreadGroup.num_threads"
                      },
                      "elements": [
                        {
                          "type": "text",
                          "text": "1"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "stringProp",
                      "attributes": {
                        "name": "ThreadGroup.ramp_time"
                      },
                      "elements": [
                        {
                          "type": "text",
                          "text": "1"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "stringProp",
                      "attributes": {
                        "name": "ThreadGroup.delay"
                      },
                      "elements": [
                        {
                          "type": "text",
                          "text": "0"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "stringProp",
                      "attributes": {
                        "name": "ThreadGroup.duration"
                      },
                      "elements": [
                        {
                          "type": "text",
                          "text": "0"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "stringProp",
                      "attributes": {
                        "name": "ThreadGroup.on_sample_error"
                      },
                      "elements": [
                        {
                          "type": "text",
                          "text": "continue"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "boolProp",
                      "attributes": {
                        "name": "ThreadGroup.scheduler"
                      },
                      "elements": [
                        {
                          "type": "text",
                          "text": "false"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "elementProp",
                      "attributes": {
                        "name": "ThreadGroup.main_controller",
                        "elementType": "LoopController",
                        "guiclass": "LoopControlPanel",
                        "testclass": "LoopController",
                        "testname": "Loop Controller",
                        "enabled": "true"
                      },
                      "elements": [
                        {
                          "type": "element",
                          "name": "boolProp",
                          "attributes": {
                            "name": "LoopController.continue_forever"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "false"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "LoopController.loops"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "1"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "boolProp",
                      "attributes": {
                        "name": "ThreadGroup.same_user_on_next_iteration"
                      },
                      "elements": [
                        {
                          "type": "text",
                          "text": "true"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "stringProp",
                      "attributes": {
                        "name": "TestPlan.comments"
                      },
                      "elements": [
                        {
                          "type": "text",
                          "text": "测试条件 Comments"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "hashTree",
                  "elements": [
                    {
                      "type": "element",
                      "name": "HTTPSamplerProxy",
                      "attributes": {
                        "guiclass": "HttpTestSampleGui",
                        "testclass": "HTTPSamplerProxy",
                        "testname": "提取Code",
                        "enabled": "true"
                      },
                      "elements": [
                        {
                          "type": "element",
                          "name": "elementProp",
                          "attributes": {
                            "name": "HTTPsampler.Arguments",
                            "elementType": "Arguments",
                            "guiclass": "HTTPArgumentsPanel",
                            "testclass": "Arguments",
                            "enabled": "true"
                          },
                          "elements": [
                            {
                              "type": "element",
                              "name": "collectionProp",
                              "attributes": {
                                "name": "Arguments.arguments"
                              },
                              "elements": [
                                {
                                  "type": "element",
                                  "name": "elementProp",
                                  "attributes": {
                                    "name": "a",
                                    "elementType": "HTTPArgument"
                                  },
                                  "elements": [
                                    {
                                      "type": "element",
                                      "name": "boolProp",
                                      "attributes": {
                                        "name": "HTTPArgument.always_encode"
                                      },
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "false"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "stringProp",
                                      "attributes": {
                                        "name": "Argument.value"
                                      },
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "b"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "stringProp",
                                      "attributes": {
                                        "name": "Argument.metadata"
                                      },
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "="
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "boolProp",
                                      "attributes": {
                                        "name": "HTTPArgument.use_equals"
                                      },
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "true"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "stringProp",
                                      "attributes": {
                                        "name": "Argument.name"
                                      },
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "a"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.domain"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "www.baidu.com"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.port"
                          }
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.protocol"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "https"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.contentEncoding"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "UTF-8"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.path"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "/"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.method"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "GET"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "boolProp",
                          "attributes": {
                            "name": "HTTPSampler.follow_redirects"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "true"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "boolProp",
                          "attributes": {
                            "name": "HTTPSampler.auto_redirects"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "false"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "boolProp",
                          "attributes": {
                            "name": "HTTPSampler.use_keepalive"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "true"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "boolProp",
                          "attributes": {
                            "name": "HTTPSampler.DO_MULTIPART_POST"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "false"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.embedded_url_re"
                          }
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.connect_timeout"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "60000"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.response_timeout"
                          }
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "TestPlan.comments"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "Comments"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "hashTree",
                      "elements": [
                        {
                          "type": "element",
                          "name": "RegexExtractor",
                          "attributes": {
                            "guiclass": "RegexExtractorGui",
                            "testclass": "RegexExtractor",
                            "testname": "code RegexExtractor",
                            "enabled": "true"
                          },
                          "elements": [
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "RegexExtractor.useHeaders"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "code"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "RegexExtractor.refname"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "code"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "RegexExtractor.regex"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "(.*)"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "RegexExtractor.template"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "$1$"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "RegexExtractor.default"
                              }
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "RegexExtractor.match_number"
                              }
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "TestPlan.comments"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "Comments"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "hashTree"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "IfController",
                      "attributes": {
                        "guiclass": "IfControllerPanel",
                        "testclass": "IfController",
                        "testname": "${code} =~ 20",
                        "enabled": "true"
                      },
                      "elements": [
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "IfController.comments"
                          }
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "IfController.condition"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "${__jexl3(!empty(\"${code}\"))}"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "boolProp",
                          "attributes": {
                            "name": "IfController.evaluateAll"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "false"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "boolProp",
                          "attributes": {
                            "name": "IfController.useExpression"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "true"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "TestPlan.comments"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "Comments"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "hashTree",
                      "elements": [
                        {
                          "type": "element",
                          "name": "HTTPSamplerProxy",
                          "attributes": {
                            "guiclass": "HttpTestSampleGui",
                            "testclass": "HTTPSamplerProxy",
                            "testname": "If Code =~ 20",
                            "enabled": "true"
                          },
                          "elements": [
                            {
                              "type": "element",
                              "name": "elementProp",
                              "attributes": {
                                "name": "HTTPsampler.Arguments",
                                "elementType": "Arguments",
                                "guiclass": "HTTPArgumentsPanel",
                                "testclass": "Arguments",
                                "enabled": "true"
                              },
                              "elements": [
                                {
                                  "type": "element",
                                  "name": "collectionProp",
                                  "attributes": {
                                    "name": "Arguments.arguments"
                                  },
                                  "elements": [
                                    {
                                      "type": "element",
                                      "name": "elementProp",
                                      "attributes": {
                                        "name": "code",
                                        "elementType": "HTTPArgument"
                                      },
                                      "elements": [
                                        {
                                          "type": "element",
                                          "name": "boolProp",
                                          "attributes": {
                                            "name": "HTTPArgument.always_encode"
                                          },
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "true"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "boolProp",
                                          "attributes": {
                                            "name": "HTTPArgument.use_equals"
                                          },
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "true"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "stringProp",
                                          "attributes": {
                                            "name": "Argument.name"
                                          },
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "code"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "stringProp",
                                          "attributes": {
                                            "name": "Argument.value"
                                          },
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "${code}"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "stringProp",
                                          "attributes": {
                                            "name": "Argument.metadata"
                                          },
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "="
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "HTTPSampler.domain"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "www.baidu.com"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "HTTPSampler.port"
                              }
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "HTTPSampler.protocol"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "https"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "HTTPSampler.contentEncoding"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "UTF-8"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "HTTPSampler.path"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "/"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "HTTPSampler.method"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "GET"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "boolProp",
                              "attributes": {
                                "name": "HTTPSampler.follow_redirects"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "boolProp",
                              "attributes": {
                                "name": "HTTPSampler.auto_redirects"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "false"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "boolProp",
                              "attributes": {
                                "name": "HTTPSampler.use_keepalive"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "boolProp",
                              "attributes": {
                                "name": "HTTPSampler.DO_MULTIPART_POST"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "false"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "HTTPSampler.embedded_url_re"
                              }
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "HTTPSampler.connect_timeout"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "60000"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "HTTPSampler.response_timeout"
                              }
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "TestPlan.comments"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "Comments"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "hashTree"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "HTTPSamplerProxy",
                      "attributes": {
                        "guiclass": "HttpTestSampleGui",
                        "testclass": "HTTPSamplerProxy",
                        "testname": "wait 10000ms",
                        "enabled": "true"
                      },
                      "elements": [
                        {
                          "type": "element",
                          "name": "elementProp",
                          "attributes": {
                            "name": "HTTPsampler.Arguments",
                            "elementType": "Arguments",
                            "guiclass": "HTTPArgumentsPanel",
                            "testclass": "Arguments",
                            "enabled": "true"
                          },
                          "elements": [
                            {
                              "type": "element",
                              "name": "collectionProp",
                              "attributes": {
                                "name": "Arguments.arguments"
                              }
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.domain"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "www.baidu.com"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.port"
                          }
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.protocol"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "https"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.contentEncoding"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "UTF-8"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.path"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "/"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.method"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "GET"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "boolProp",
                          "attributes": {
                            "name": "HTTPSampler.follow_redirects"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "true"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "boolProp",
                          "attributes": {
                            "name": "HTTPSampler.auto_redirects"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "false"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "boolProp",
                          "attributes": {
                            "name": "HTTPSampler.use_keepalive"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "true"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "boolProp",
                          "attributes": {
                            "name": "HTTPSampler.DO_MULTIPART_POST"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "false"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.embedded_url_re"
                          }
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.connect_timeout"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "60000"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "HTTPSampler.response_timeout"
                          }
                        },
                        {
                          "type": "element",
                          "name": "stringProp",
                          "attributes": {
                            "name": "TestPlan.comments"
                          },
                          "elements": [
                            {
                              "type": "text",
                              "text": "Comments"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "hashTree",
                      "elements": [
                        {
                          "type": "element",
                          "name": "ConstantTimer",
                          "attributes": {
                            "guiclass": "ConstantTimerGui",
                            "testclass": "ConstantTimer",
                            "testname": "10000 ms",
                            "enabled": "true"
                          },
                          "elements": [
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "ConstantTimer.delay"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "1000"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "stringProp",
                              "attributes": {
                                "name": "TestPlan.comments"
                              },
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "Comments"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "hashTree"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "ResultCollector",
                  "attributes": {
                    "guiclass": "ViewResultsFullVisualizer",
                    "testclass": "ResultCollector",
                    "testname": "View Results Tree",
                    "enabled": "true"
                  },
                  "elements": [
                    {
                      "type": "element",
                      "name": "boolProp",
                      "attributes": {
                        "name": "ResultCollector.error_logging"
                      },
                      "elements": [
                        {
                          "type": "text",
                          "text": "false"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "objProp",
                      "elements": [
                        {
                          "type": "element",
                          "name": "name",
                          "elements": [
                            {
                              "type": "text",
                              "text": "saveConfig"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "value",
                          "attributes": {
                            "class": "SampleSaveConfiguration"
                          },
                          "elements": [
                            {
                              "type": "element",
                              "name": "time",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "latency",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "timestamp",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "success",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "label",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "code",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "message",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "threadName",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "dataType",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "encoding",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "false"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "assertions",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "subresults",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "responseData",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "false"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "samplerData",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "false"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "xml",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "false"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "fieldNames",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "responseHeaders",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "false"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "requestHeaders",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "false"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "responseDataOnError",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "false"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "saveAssertionResultsFailureMessage",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "assertionsResultsToSave",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "0"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "bytes",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "sentBytes",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "url",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "threadCounts",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "idleTime",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "connectTime",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "true"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "name": "stringProp",
                      "attributes": {
                        "name": "filename"
                      }
                    },
                    {
                      "type": "element",
                      "name": "stringProp",
                      "attributes": {
                        "name": "TestPlan.comments"
                      },
                      "elements": [
                        {
                          "type": "text",
                          "text": "Comments"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "element",
                  "name": "hashTree"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
