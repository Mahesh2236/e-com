@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    http://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Maven Start Up Batch script
@REM
@REM Required ENV vars:
@REM JAVA_HOME - location of a JDK home dir
@REM
@REM Optional ENV vars
@REM MAVEN_BATCH_ECHO - set to 'on' to enable the echoing of the batch commands
@REM MAVEN_BATCH_PAUSE - set to 'on' to wait for a key stroke before ending
@REM MAVEN_OPTS - parameters passed to the Java VM when running Maven
@REM     e.g. to debug Maven itself, use
@REM set MAVEN_OPTS=-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=8000
@REM ----------------------------------------------------------------------------

@REM Begin all vars with __ to prevent leaking into the environment
@setlocal
@if "%MAVEN_BATCH_ECHO%" == "on"  echo %MAVEN_BATCH_ECHO%

@REM set %HOME% to equivalent of $HOME
@if not "%HOME%" == "" goto homeSet
@set "HOME=%USERPROFILE%"
:homeSet

@set __MVNW_ARG_0=%~0
@set __MVNW_OUT_DIR=%~dp0.mvn\wrapper

@set "WRAPPER_JAR=%__MVNW_OUT_DIR%\maven-wrapper.jar"
@set "WRAPPER_PROPERTIES=%__MVNW_OUT_DIR%\maven-wrapper.properties"
@set "MVNW_REPO_URL=https://repo.maven.apache.org/maven2"

@set __MVNW_JAVA_EXE=java.exe
@if not "%JAVA_HOME%" == "" set "__MVNW_JAVA_EXE=%JAVA_HOME%\bin\java.exe"

@if exist "%WRAPPER_JAR%" goto boot
@if not exist "%WRAPPER_PROPERTIES%" (
    echo Couldn't find %WRAPPER_PROPERTIES%, please check your installation.
    exit /b 1
)

@REM  Find the Maven version in properties
@for /f "tokens=2 delims==" %%i in ('findstr /i "distributionUrl" "%WRAPPER_PROPERTIES%"') do @set "__MVNW_DIST_URL=%%i"

@REM  Find the JAR version in properties
@for /f "tokens=2 delims==" %%i in ('findstr /i "wrapperUrl" "%WRAPPER_PROPERTIES%"') do @set "__MVNW_WRAPPER_URL=%%i"
@if "%__MVNW_WRAPPER_URL%" == "" set "__MVNW_WRAPPER_URL=%MVNW_REPO_URL%/io/takari/maven-wrapper/0.5.6/maven-wrapper-0.5.6.jar"

@echo Downloading Maven Wrapper JAR from %__MVNW_WRAPPER_URL%
@powershell -Command "if ($PSVersionTable.PSVersion.Major -ge 3) { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -OutFile \"%WRAPPER_JAR%\" \"%__MVNW_WRAPPER_URL%\" } else { (New-Object Net.WebClient).DownloadFile(\"%__MVNW_WRAPPER_URL%\", \"%WRAPPER_JAR%\") }"
@if not exist "%WRAPPER_JAR%" (
    echo Failed to download %WRAPPER_JAR%, please check your network.
    exit /b 1
)

:boot
@set __MVNW_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain

"%__MVNW_JAVA_EXE%" %MAVEN_OPTS% -classpath "%WRAPPER_JAR%" "-Dmaven.multiModuleProjectDirectory=%CD%" %__MVNW_LAUNCHER% %*

@endlocal
