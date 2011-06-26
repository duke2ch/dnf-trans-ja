'use strict';

/**
 * DNF 日本語化インストールスクリプト
 */

(function() {
    var dist_path,
        dist_files,
        dnf_path,
        pwd,
        wsapp = WScript.CreateObject('Shell.Application'),
        wsfs = WScript.CreateObject('Scripting.FileSystemObject'),
        wssh = WScript.CreateObject('WScript.Shell'),
        os_ver = wsfs.GetFileVersion(
            wsfs.BuildPath(wsfs.GetSpecialfolder(1).Path, 'kernel32.dll')
        );

    // UAC tricks for Windows Vista or later
    if (parseInt(os_ver) >= 6) {
        if (WScript.Arguments.length === 0) { 
            wsapp.ShellExecute(
                'wscript.exe',
                '"' + WScript.ScriptFullName + '"' + ' "' +
                    wssh.CurrentDirectory + '"',
                '',
                'runas',
                1
            ); 
            WScript.Quit(0);
        }
    }

    if (WScript.Arguments.length === 1) {
        pwd = WScript.Arguments(0);
    }
    else {
        pwd = wssh.CurrentDirectory;
    }

    // Start script
    function getDNFPath() {
        var path_x64 = wssh.ExpandEnvironmentStrings('%PROGRAMFILES(X86)%') +
                '\\Steam\\steamapps\\common\\duke nukem forever',
            path_x86 = wssh.ExpandEnvironmentStrings('%PROGRAMFILES%') +
                '\\Steam\\steamapps\\common\\duke nukem forever';

        if (wsfs.FolderExists(path_x64)) {
            return path_x64;
        }
        else if (wsfs.FolderExists(path_x86)) {
            return path_x86;
        }
    }

    if (wsfs.FolderExists(pwd + '\\dist') &&
            wsfs.FolderExists(getDNFPath() + '\\System')) {
        dist_path = pwd + '\\dist';
        dnf_path = getDNFPath() + '\\System\\'; // Close with \\ IMPORTANT!
    }

    dist_files = new Enumerator(wsfs.GetFolder(dist_path).Files);

    for (dist_files.moveFirst(); !dist_files.atEnd(); dist_files.moveNext()) {
        wsfs.CopyFile(dist_files.item(), dnf_path, true);
    }

    WScript.Echo('Done.');
})();
